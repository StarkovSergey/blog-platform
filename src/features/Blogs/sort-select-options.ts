import { SelectOption } from 'common/components'

export const sortSelectOptions: SelectOption[] = [
  {
    label: 'New blogs first',
    value: {
      sortBy: 'createdAt',
      sortDirection: 'desc',
    },
  },
  {
    label: 'Old blogs first',
    value: {
      sortBy: 'createdAt',
      sortDirection: 'asc',
    },
  },
  {
    label: 'From A to Z',
    value: {
      sortBy: 'name',
      sortDirection: 'asc',
    },
  },
  {
    label: 'From Z to A',
    value: {
      sortBy: 'name',
      sortDirection: 'desc',
    },
  },
]
