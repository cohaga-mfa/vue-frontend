<script setup lang="ts" generic="TData, TValue">
import type { ColumnDef } from '@tanstack/vue-table'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { ClipboardList, Download, Filter, Save, Settings } from 'lucide-vue-next';
import {
    FlexRender,
    getCoreRowModel,
    useVueTable,
} from '@tanstack/vue-table'
import Button from '@/components/ui/button/Button.vue';

const props = defineProps<{
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}>()

const table = useVueTable({
    get data() { return props.data },
    get columns() { return props.columns },
    getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
    <div class="border rounded-md">
        <div class="px-5 py-2 flex flex-row justify-between">
            <div class="flex flex-row gap-5">
                <Button size="icon">
                    <ClipboardList />
                </Button>
                <Button size="icon">
                    <Save />
                </Button>
                <Button size="icon">
                    <Download />
                </Button>
            </div>
            <div class="flex flex-row gap-5">
                <Button size="icon">
                    <Filter />
                </Button>
                <Button size="icon">
                    <Settings />
                </Button>
            </div>
        </div>
        <Table>
            <TableHeader>
                <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                    <TableHead v-for="header in headerGroup.headers" :key="header.id">
                        <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                            :props="header.getContext()" />
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <template v-if="table.getRowModel().rows?.length">
                    <TableRow v-for="row in table.getRowModel().rows" :key="row.id"
                        :data-state="row.getIsSelected() ? 'selected' : undefined">
                        <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                            <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                        </TableCell>
                    </TableRow>
                </template>
                <template v-else>
                    <TableRow>
                        <TableCell :colspan="columns.length" class="h-24 text-center">
                            No results.
                        </TableCell>
                    </TableRow>
                </template>
            </TableBody>
        </Table>
    </div>
</template>