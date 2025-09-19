import React from 'react'
import done from "../../assets/image/Done.svg"
import folder from "../../assets/image/folder-file-01.svg"
import smart from "../../assets/image/Alarmclock_fill.svg"
import create from "../../assets/image/Add_square_fill.svg"
const Feature_Section = () => {
  return (
    <>
      <div class="bg-gray-900 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base/7 font-semibold text-indigo-400">Everything you need to manage your tasks</h2>
      <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">Everything you need to manage your tasks</p>
      <p class="mt-6 text-lg/8 text-gray-300">Stay organized and productive with a simple To-Do List app. Add, edit, and complete tasks with ease, and keep your day under control.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-white">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
            <img src={create} alt="create" className='w-6 h-8 text-white'/>
            </div>
Easy task creation          </dt>
          <dd class="mt-2 text-base/7 text-gray-400">Quickly add new tasks with all the details you need.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-white">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
              <img src={smart} alt="smart" className='w-6 h-8 text-white'/>
            </div>
 Smart reminders
          </dt>
          <dd class="mt-2 text-base/7 text-gray-400">Get notified about important tasks right on time.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-white">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
             <img src={folder} alt="folder" className='w-6 h-8 text-white'/>
            </div>
Organized lists          </dt>
          <dd class="mt-2 text-base/7 text-gray-400">Group your tasks into different lists (Work, Study, Personal) for better focus.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-white">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
             <img src={done} alt="done" className='w-6 h-8 text-white'/>
            </div>
Mark tasks as done and watch your progress grow.          </dt>
          <dd class="mt-2 text-base/7 text-gray-400">Mark tasks as done and watch your progress grow.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

    </>
  )
}

export default Feature_Section
