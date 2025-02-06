<?php

namespace App\Logging;

use Monolog\Handler\AbstractProcessingHandler;
use OpenSearch\Client;
use Monolog\Logger;

class OpenSearchHandler extends AbstractProcessingHandler
{
    protected Client $client;
    protected array $options;

    public function __construct(Client $client, array $options = [], $level = Logger::DEBUG, bool $bubble = true)
    {
        parent::__construct($level, $bubble);

        $this->client = $client;
        $this->options = $options;
    }

    protected function write(array|\Monolog\LogRecord $record): void
    {
        $params = [
            'index' => $this->options['index'] ?? 'laravel_logs',
            'body' => $record['formatted'],
        ];

        $this->client->index($params);
    }
}