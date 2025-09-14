<script>
    export let y;

    export let tabs = [
        { name: "ML Projects", link: "#ml-projects" },
        { name: "DS Projects", link: "#ds-projects" },
        { name: "About me", link: "#about" },
    ];

    const github = "https://github.com/anjaliy11";
    const email = "mailto:anjaliyadavknp9450@gmail.com";
    const linkedin = "https://www.linkedin.com/in/anjaliy11";
    const leetcode = "https://leetcode.com/anjali11y"; // LeetCode profile
</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-slate-950 border-violet-950"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 class="font-medium">
        <b class="font-bold poppins">Anjali</b> <span class="">Yadav</span>
    </h1>

    <div class="sm:flex items-center gap-6 hidden">
        {#each tabs as tab}
            <a
                href={tab.link}
                class="duration-200 hover:text-violet-400"
            >
                <p>{tab.name}</p>
            </a>
        {/each}

        <!-- GitHub Link -->
        <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            class="duration-200 hover:text-violet-400 flex items-center gap-1"
        >
            <i class="fa-brands fa-github text-xl"></i>
            <span class="hidden sm:inline">GitHub</span>
        </a>

        <!-- LinkedIn Link -->
        <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            class="duration-200 hover:text-violet-400 flex items-center gap-1"
        >
            <i class="fa-brands fa-linkedin text-xl"></i>
            <span class="hidden sm:inline">LinkedIn</span>
        </a>

        <!-- LeetCode Link -->
        <a
            href={leetcode}
            target="_blank"
            rel="noopener noreferrer"
            class="duration-200 hover:text-violet-400 flex items-center gap-1"
        >
            <span class="font-semibold">LeetCode</span>
        </a>

        <!-- Email Link -->
        <a
            href={email}
            class="duration-200 hover:text-violet-400 flex items-center gap-1"
        >
            <i class="fa-solid fa-envelope text-xl"></i>
            <span class="hidden sm:inline">Email</span>
        </a>
    </div>
</header>
