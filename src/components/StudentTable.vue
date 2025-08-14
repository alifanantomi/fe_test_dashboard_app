<template>
  <div class="w-full">
    <table class="w-full border-collapse">
      <thead>
        <tr class="text-left text-sm text-gray-500">
          <th class="py-2 font-medium"></th>
          <th class="py-2 font-medium">Name</th>
          <th class="py-2 font-medium">Email</th>
          <th class="py-2 font-medium">Phone</th>
          <th class="py-2 font-medium">Enroll No.</th>
          <th class="py-2 font-medium">Date of Admission</th>
          <th class="py-2 font-medium"></th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="row in rows"
          :key="row.id"
          class="align-middle"
        >
          <td class="py-3">
            <img
              :src="row.avatar"
              :alt="`${row.name} avatar`"
              class="h-10 w-10 rounded-lg object-cover"
            />
          </td>

          <td class="py-3">
            <div class="text-sm font-medium text-gray-900">{{ row.name }}</div>
          </td>

          <td class="py-3">
            <div class="text-sm">
              {{ row.email }}
            </div>
          </td>

          <td class="py-3">
            <div class="text-sm text-gray-700">
              {{ row.phone }}
            </div>
          </td>

          <td class="py-3">
            <span class="text-sm text-gray-700">{{ row.enrollNumber }}</span>
          </td>

          <td class="py-3">
            <span class="text-sm text-gray-700">
              {{ row.admissionDate }}
            </span>
          </td>

          <td class="py-3">
            <div class="flex items-center gap-4">
              <button
                type="button"
                class="text-primary cursor-pointer"
                @click="$emit('edit', row)"
              >
                <RiPencilLine size="24px" />
              </button>
              <button
                type="button"
                class="text-primary cursor-pointer"
                @click="$emit('delete', row)"
              >
                <RiDeleteBinLine size="24px" />
              </button>
            </div>
          </td>
        </tr>

        <tr v-if="rows.length === 0">
          <td colspan="7" class="py-6 text-center text-sm text-gray-500">
            No data.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { StudentRow } from '@/lib/types/student';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RiDeleteBinLine, RiPencilLine } from '@remixicon/vue';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'StudentTable',
  components: { RiDeleteBinLine, RiPencilLine },
  props: {
    rows: {
      type: Array as PropType<StudentRow[]>,
      required: true,
      default: () => [],
    },
  },
  emits: ['edit', 'delete'],
});
</script>
