<script setup>

</script>

<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Just+Another+Hand&family=Rochester&family=Rouge+Script&display=swap" rel="stylesheet">

<nav class="bg-[#3A4F41] fixed w-full z-20 top-0 start-0 border-nav-bar-bg top-0">
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="logo">
            <a href="#about-section" class="flex items-center space-x-3 rtl:space-x-reverse text-[#F1BF98] font-medium font-rouge text-3xl">Katherine Poblete</a>
        </div>
        

        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-[#3A4F41] rounded-lg bg-[#3A4F41] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#3A4F41] dark:bg-[#3A4F41] md:dark:bg-[#3A4F41] dark:border-gray-700">
            <li>
                <a href="#about-section" class="block py-2 px-3 text-white hover:bg-gray-100 dark:text-white dark:hover:bg-[#3A4F41] dark:hover:text-[#F1BF98] dark:border-[#3A4F41]" aria-current="page">About</a>
            </li>
            <li>
                <a href="#skills-section" class="block py-2 px-3 text-white hover:bg-gray-100 dark:text-white dark:hover:bg-[#3A4F41] dark:hover:text-[#F1BF98] dark:border-[#3A4F41]">Skills</a>
            </li>
            <li>
                <a href="#projects-section" class="block py-2 px-3 text-white hover:bg-gray-100 dark:text-white dark:hover:bg-[#3A4F41] dark:hover:text-[#F1BF98] dark:border-[#3A4F41]">Projects</a>
            </li>
            <li>
                <a href="#testimonials-section" class="block py-2 px-3 text-white hover:bg-gray-100 dark:text-white dark:hover:bg-[#3A4F41] dark:hover:text-[#F1BF98] dark:border-[#3A4F41]">Testimonials</a>
            </li>
            <li>
                <a href="#contact-section" class="block py-2 px-3 text-white hover:bg-gray-100 dark:text-white dark:hover:bg-[#3A4F41] dark:hover:text-[#F1BF98] dark:border-[#3A4F41]">Contact</a>
            </li>
            </ul>
        </div>
    </div>

</nav>

</template>

