<template>
  <div class="flex flex-row bg-white overflow-hidden shadow rounded-lg divide-x divide-gray-200 text-xs border">

    <div class="w-1/2 divide-y divide-gray-100 h-126">

      <!-- Profile -->
      <div class="flex flex-row items-center h-14 px-3 bg-gray-50">
        <div class="w-1/5 line-clamp-1">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Profile
          </h3>
        </div>
        <div class="flex flex-row w-4/5 justify-start gap-x-6 items-center">
          <InputCheckbox placeholder="Minimum age" label="All">
            <CalculatorIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </InputCheckbox>
          <InputCheckbox placeholder="Minimum age" label="Player">
            <CalculatorIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </InputCheckbox>
          <InputCheckbox placeholder="Minimum age" label="Public">
            <CalculatorIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </InputCheckbox>
        </div>
      </div>

      <!-- Link -->
      <div class="flex flex-row items-center h-14 px-3">
        <div class="w-1/5 line-clamp-1">
          Public link
        </div>
        <div class="w-4/5">
          <InputSelectMulti placeholder="Select one or more links">
            <LinkIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </InputSelectMulti>
        </div>
      </div>

      <!-- Gender -->
      <div class="flex flex-row items-center h-14 px-3">
        <div class="w-1/5 line-clamp-1">
          Gender
        </div>
        <div class="flex flex-row w-4/5 justify-start gap-x-6 items-center">
          <InputCheckbox placeholder="Minimum age" label="Both">
            <CalculatorIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </InputCheckbox>
          <InputCheckbox placeholder="Minimum age" label="Female">
            <CalculatorIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </InputCheckbox>
          <InputCheckbox placeholder="Minimum age" label="Male">
            <CalculatorIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </InputCheckbox>
        </div>
      </div>

      <!-- Age -->
      <div class="flex flex-row items-center h-14 px-3">
        <div class="w-1/5 line-clamp-1">
          Age
        </div>
        <div class="flex flex-row w-4/5 items-center">
          <div class="w-2/5">
            <InputNumber placeholder="Minimum age">
              <CalculatorIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
            </InputNumber>
          </div>
          <div class="w-1/5 line-clamp-1 text-center">
            to
          </div>
          <div class="w-2/5">
            <InputNumber placeholder="Maximum age">
              <CalculatorIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
            </InputNumber>
          </div>
        </div>
      </div>

      <!-- Experience -->
      <div class="flex flex-row items-center h-14 px-3">
        <div class="w-1/5 line-clamp-1">
          Experience
        </div>
        <div class="w-4/5">
          <InputSelectMulti placeholder="Select one or more experiences" options="experiences">
            <BriefcaseIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </InputSelectMulti>
        </div>
      </div>

      <!-- Education -->
      <div class="flex flex-row items-center h-14 px-3">
        <div class="w-1/5 line-clamp-1">
          Education
        </div>
        <div class="w-4/5">
          <InputSelectMulti placeholder="Select one or more educations">
            <AcademicCapIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </InputSelectMulti>
        </div>
      </div>

      <!-- Countries -->
      <div class="flex flex-row items-center h-14 px-3">
        <div class="w-1/5 line-clamp-1">
          Country
        </div>
        <div class="w-4/5">
          <InputSelectMulti placeholder="Select one or more countries">
            <LocationMarkerIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </InputSelectMulti>
        </div>
      </div>

      <!-- Nationalities -->
      <div class="flex flex-row items-center h-14 px-3">
        <div class="w-1/5 line-clamp-1">
          Nationality
        </div>
        <div class="w-4/5">
          <InputSelectMulti placeholder="Select one or more nationalities">
            <GlobeAltIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </InputSelectMulti>
        </div>
      </div>

      <!-- Languages -->
      <div class="flex flex-row items-center h-14 px-3">
        <div class="w-1/5 line-clamp-1">
          Languages
        </div>
        <div class="w-4/5">
          <InputSelectMulti placeholder="Select one or more languages">
            <FlagIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </InputSelectMulti>
        </div>
      </div>
    </div>

    <div class="w-1/2 h-126 divide-y divide-gray-100">

      <!-- Customer Fields -->
      <div class="flex flex-row items-center h-14 px-3 bg-gray-50">
        <div class="w-1/2">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Customer Fields
          </h3>
        </div>
        <div class="w-1/2 text-right">
          <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            Reset All Filters
          </button>
        </div>
      </div>

      <div class="w-full h-112 divide-y divide-gray-100 overflow-auto">

        <!-- Example -->
        <div class="flex flex-row items-center h-14 px-3">
          <div class="w-1/5 line-clamp-1">
            Chat
          </div>
          <div class="w-4/5">
            <InputSelectMulti placeholder="Select chat">
              <ChatAltIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
            </InputSelectMulti>
          </div>
        </div>

        <!-- Example -->
        <div class="flex flex-row items-center h-14 px-3">
          <div class="w-1/5 line-clamp-1">
            Team
          </div>
          <div class="w-4/5">
            <InputSelectMulti placeholder="Select team">
              <UserGroupIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
            </InputSelectMulti>
          </div>
        </div>

        <!-- Example -->
        <div class="flex flex-row items-center h-14 px-3">
          <div class="w-1/5 line-clamp-1">
            Data
          </div>
          <div class="w-4/5">
            <InputSelectMulti placeholder="Select data">
              <DatabaseIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
            </InputSelectMulti>
          </div>
        </div>

        <!-- Example -->
        <div class="flex flex-row items-center h-14 px-3">
          <div class="w-1/5 line-clamp-1">
            Income
          </div>
          <div class="w-4/5">
            <InputSelectMulti placeholder="Select income">
              <SearchIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
            </InputSelectMulti>
          </div>
        </div>

        <!-- Example -->
        <div class="flex flex-row items-center h-14 px-3">
          <div class="w-1/5 line-clamp-1">
            Something Something Something Something Something
          </div>
          <div class="w-4/5">
            <InputSelectMulti placeholder="Select something">
              <SearchIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
            </InputSelectMulti>
          </div>
        </div>

        <!-- Example -->
        <div class="flex flex-row items-center h-14 px-3">
          <div class="w-1/5 line-clamp-1">
            Else
          </div>
          <div class="w-4/5">
            <InputSelectMulti placeholder="Select else">
              <SearchIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
            </InputSelectMulti>
          </div>
        </div>

        <!-- Example -->
        <div class="flex flex-row items-center h-14 px-3">
          <div class="w-1/5 line-clamp-1">
            Again
          </div>
          <div class="w-4/5">
            <InputSelectMulti placeholder="Select again">
              <SearchIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
            </InputSelectMulti>
          </div>
        </div>

        <!-- Example -->
        <div class="flex flex-row items-center h-14 px-3">
          <div class="w-1/5 line-clamp-1">
            Really
          </div>
          <div class="w-4/5">
            <InputSelectMulti placeholder="Select really">
              <SearchIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
            </InputSelectMulti>
          </div>
        </div>

        <!-- Example -->
        <div class="flex flex-row items-center h-14 px-3">
          <div class="w-1/5 line-clamp-1">
            Please
          </div>
          <div class="w-4/5">
            <InputSelectMulti placeholder="Select please">
              <SearchIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
            </InputSelectMulti>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import InputCheckbox from '/src/components/partials/InputCheckbox.vue'
import InputNumber from '/src/components/partials/InputNumber.vue'
import InputSelectDate from '/src/components/partials/InputSelectDate.vue'
import InputSelectMulti from '/src/components/partials/InputSelectMulti.vue'
import { AcademicCapIcon, BriefcaseIcon, CalculatorIcon, CalendarIcon, ChatAltIcon, DatabaseIcon, FlagIcon, GlobeAltIcon, LinkIcon, LocationMarkerIcon, SearchIcon, UserGroupIcon } from '@heroicons/vue/solid'

const experiences = [
  { selected: true, value: 'A', description: 'Option A' },
  { selected: false, value: 'A', description: 'Option B' },
  { selected: false, value: 'A', description: 'Option C' },
  { selected: true, value: 'A', description: 'Option D' },
  { selected: false, value: 'A', description: 'Option E' },
  { selected: false, value: 'A', description: 'Option F' },
  { selected: false, value: 'A', description: 'Option G' }
];

export default {
  components: {
    InputCheckbox,
    InputSelectDate,
    InputSelectMulti,
    InputNumber,

    AcademicCapIcon,
    BriefcaseIcon,
    CalculatorIcon,
    CalendarIcon,
    ChatAltIcon,
    DatabaseIcon,
    FlagIcon,
    GlobeAltIcon,
    LinkIcon,
    LocationMarkerIcon,
    SearchIcon,
    UserGroupIcon
  },
  setup() {
    return {
      experiences
    }
  },
}
</script>

<style scoped>
  .h-126 {
    height: 31.5rem;
  }
  .h-112 {
    height: 28rem;
  }
</style>
