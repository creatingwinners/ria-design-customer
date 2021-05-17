<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="section" static class="z-50 fixed inset-0 overflow-hidden" @close="open = false" :open="open">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
            <div class="w-screen max-w-md">
              <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div class="p-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-medium text-gray-900">
                      Chat
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" @click="open = false">
                        <span class="sr-only">Close panel</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

                <ul class="divide-y divide-gray-200 overflow-y-auto border-t">
                  <li v-for="person in team" :key="person.handle" class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a :href="person.href" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true" />
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
                            <span :class="[person.status === 'online' ? 'bg-green-400' : 'bg-gray-300', 'absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white']" aria-hidden="true" />
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">{{ person.name }}</p>
                            <p class="text-sm text-gray-500 truncate">{{ '@' + person.handle }}</p>
                          </div>
                        </div>
                      </a>
                      <Menu as="div" class="ml-2 relative inline-block text-left">
                        <MenuButton class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <DotsVerticalIcon class="w-5 h-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                          </span>
                        </MenuButton>
                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                          <MenuItems class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="py-1">
                              <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">View profile</a>
                              </MenuItem>
                              <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Send message</a>
                              </MenuItem>
                            </div>
                          </MenuItems>
                        </transition>
                      </Menu>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'
import { DotsVerticalIcon } from '@heroicons/vue/solid'

const tabs = [
  { name: 'All', href: '#', current: true },
  { name: 'Online', href: '#', current: false },
  { name: 'Offline', href: '#', current: false },
]
const team = [
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
  },
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
  },
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
  },

]

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    DotsVerticalIcon,
    XIcon,
  },
  setup() {
    const open = ref(false)

    return {
      tabs,
      team,
      open,
    }
  },
  mounted() {
    this.emitter.on('showChat', () => {
      this.open = true;
    });
  }
}
</script>

