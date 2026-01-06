<script>
    export let step;
</script>

<a
    href={step.link || step.href}
    target="_blank"
    rel="noopener noreferrer"
    class="
        group relative flex flex-col gap-4
        p-5 sm:p-6 md:p-8
        rounded-2xl border border-violet-800
        bg-slate-900/40
        text-center cursor-pointer
        hover:border-violet-400
        hover:shadow-lg hover:shadow-violet-900/40
        duration-200
    "
>
    <!-- Icon / Logo -->
    {#if step.icon}
        <div class="flex justify-center">
            <div
                class="
                    bg-slate-950
                    w-14 h-14 sm:w-16 sm:h-16
                    rounded-full
                    grid place-items-center
                    text-3xl sm:text-4xl
                    text-violet-400
                    shadow-md
                "
            >
                <i class={step.icon} />
            </div>
        </div>
    {/if}

    <!-- Title -->
    <h3 class="font-semibold text-lg sm:text-xl md:text-2xl">
        {step.name}
    </h3>

    <!-- Content -->
    <div class="text-sm sm:text-base text-gray-300">
        <slot />
    </div>

    <!-- CTA -->
    <div class="mt-auto pt-3">
        <span
            class="
                inline-flex items-center gap-1
                text-sm font-medium text-violet-400
                group-hover:underline
            "
        >
            View project
            <span aria-hidden="true">→</span>
        </span>
    </div>
</a>
