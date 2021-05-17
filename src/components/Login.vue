<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <svg class="mx-auto h-12 w-auto" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
        <g id="Group_9895" data-name="Group 9895" transform="translate(-41 -22)">
          <g id="TB_Logo" data-name="TB Logo" transform="translate(41 22)">
            <rect id="Rectangle_40" data-name="Rectangle 40" class="fill-current text-yellow-500" width="40" height="40" rx="8"></rect>
            <g id="Group_1320" data-name="Group 1320" transform="translate(11.651 8.622)">
              <path id="Subtraction_19" data-name="Subtraction 19" class="fill-current text-white" d="M14.44,24.718a3.478,3.478,0,0,1-2.848-1.481L7.852,17.9c-.029-.041-.058-.084-.085-.126-.275-.036-.551-.085-.818-.145v3.522a3.474,3.474,0,1,1-6.949,0V3.474A3.475,3.475,0,0,1,5.525.67,8.923,8.923,0,0,1,14.77,15.66l2.514,3.59a3.474,3.474,0,0,1-2.843,5.468ZM9.011,4.468a4.532,4.532,0,1,0,.623.043A4.532,4.532,0,0,0,9.011,4.468Zm.075,7.425a2.408,2.408,0,0,1-.328-.023A2.422,2.422,0,0,1,7.505,11.3a2.378,2.378,0,0,1-.321-.338,2.425,2.425,0,0,1-.254-.4,2.458,2.458,0,0,1-.174-.457l4.667-1.25a2.453,2.453,0,0,1,.078.482,2.415,2.415,0,0,1-.128.929,2.4,2.4,0,0,1-.192.421,2.483,2.483,0,0,1-.269.378,2.436,2.436,0,0,1-.339.321,2.318,2.318,0,0,1-.4.253,2.421,2.421,0,0,1-.941.252C9.184,11.892,9.135,11.894,9.086,11.894Z" transform="translate(0 0)"></path>
            </g>
          </g>
        </g>
      </svg>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        {{ ' ' }}
        <router-link to="/register" class="font-medium text-yellow-500 hover:text-yellow-400">
          create an account here!
        </router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="mt-1">
              <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <router-link to="/dashboard" class="font-medium text-yellow-500 hover:text-yellow-400">
                Forgot your password?
              </router-link>
            </div>
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
              Sign in
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>
