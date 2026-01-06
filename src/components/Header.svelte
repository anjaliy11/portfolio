<script>
    export let y;

    export let tabs = [
        { name: "ML", link: "#ml-projects" },
        { name: "Data Science", link: "#ds-projects" },
        { name: "GenAI", link: "#genai-projects" },
        { name: "Certificates", link: "#certificates" },
        { name: "Achievements", link: "#achievements" },
        { name: "About", link: "#about" },
    ];

    const github = "https://github.com/anjaliy11";
    const email = "mailto:anjaliyadavknp9450@gmail.com";
    const linkedin = "https://www.linkedin.com/in/anjaliy11";
    const leetcode = "https://leetcode.com/anjali11y";
</script>

<header
    class={
        "sticky z-[10] top-0 px-6 flex items-center justify-between border-b duration-300 backdrop-blur " +
        (y > 0
            ? "py-3 bg-slate-950/90 border-violet-900"
            : "py-5 bg-transparent border-transparent")
    }
>
    <!-- Logo / Identity -->
    <div class="flex flex-col leading-tight">
        <h1 class="font-semibold text-lg tracking-wide">
            <span class="poppins font-bold text-violet-400">Anjali</span> Yadav
        </h1>
        <span class="text-xs text-gray-400">
            Python • ML • GenAI Engineer
        </span>
    </div>

    <!-- Navigation -->
    <div class="sm:flex items-center gap-6 hidden">
        {#each tabs as tab}
            <a
                href={tab.link}
                class="relative group text-sm font-medium text-gray-300 hover:text-violet-400 duration-200"
            >
                {tab.name}
                <span
                    class="absolute left-0 -bottom-1 w-0 h-[2px] bg-violet-400 group-hover:w-full duration-200"
                ></span>
            </a>
        {/each}

        <!-- Certificate Credibility Chips
        <div class="flex gap-2 ml-4">
            <span class="px-3 py-1 text-xs bg-violet-900/40 text-violet-300 rounded-full">
                NVIDIA
            </span>
            <span class="px-3 py-1 text-xs bg-violet-900/40 text-violet-300 rounded-full">
                Kaggle SQL
            </span>
        </div> -->

        <!-- Divider -->
        <span class="h-5 w-px bg-gray-700 mx-2"></span>

        <!-- Socials -->
        <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-violet-400 duration-200"
            title="GitHub"
        >
            <i class="fa-brands fa-github text-xl"></i>
        </a>

        <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-violet-400 duration-200"
            title="LinkedIn"
        >
            <i class="fa-brands fa-linkedin text-xl"></i>
        </a>

        <a
            href={leetcode}
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-semibold hover:text-violet-400 duration-200"
            title="LeetCode"
        >
            LeetCode
        </a>

        <a
            href={email}
            class="hover:text-violet-400 duration-200"
            title="Email"
        >
            <i class="fa-solid fa-envelope text-lg"></i>
        </a>
    </div>
</header>
