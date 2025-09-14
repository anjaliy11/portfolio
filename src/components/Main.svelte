<script>
    import Step from "./Step.svelte";

    // ML Projects
    let mlProjects = [
    {
        name: "Sangam ML",
        link: "https://github.com/anjaliy11/Sangam_ML", // GitHub repo
        live: "https://sangam-ml.onrender.com",          // Live Render link
        description:
            "A Smart India Hackathon project that leverages machine learning to provide anomaly detection, predictive modeling, and cost reduction solutions for real-world operational challenges. .",
        tech: ["Python", "Transformers", "scikit-learn"],
    },
        {
            name: "Fix Ride",
            link: "https://github.com/anjaliy11/Fix_Ride",
            description:
                "ML-powered recommendation system for vehicle repair services using geolocation and availability.",
            tech: ["Python", "Pandas", "scikit-learn", "Flask", "MongoDB"],
        },
        {
            name: "AgroCheck",
            link: "https://github.com/anjaliy11/AgroCheck",
            description:
                "Crop disease detection tool with CNNs for real-time agricultural decision-making.",
            tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
        },
        {
            name: "Sign Language Detection",
            link: "https://github.com/anjaliy11/SignLanguageDetection",
            description:
                "Real-time hand gesture recognition for sign-to-text translation with deep learning.",
            tech: ["Python", "TensorFlow", "OpenCV", "MediaPipe"],
        },
        {
            name: "Reinforcement Learning",
            link: "https://github.com/anjaliy11/ReinforcementLearning",
            description:
                "Q-learning and DQN implementations for autonomous decision-making in simulated environments.",
            tech: ["Python", "PyTorch", "Gym", "NumPy"],
        },
    ];

    // DS Projects
    let dsProjects = [
        {
            name: "ANN Churn Classification",
            link: "https://github.com/anjaliy11/ANN_churn_classification",
            description:
                "ANN model predicting customer churn with engineered features and optimized architecture.",
            tech: ["Python", "TensorFlow", "Keras", "scikit-learn"],
        },
        {
            name: "RNN Sentiment Analysis",
            link: "https://github.com/anjaliy11/RNN_sentimental_analysis",
            description:
                "RNN for sentiment classification, capturing sequential dependencies in text reviews.",
            tech: ["Python", "TensorFlow", "Keras", "NLTK"],
        },
        {
            name: "LSTM RNN",
            link: "https://github.com/anjaliy11/LSTM_RNN",
            description:
                "LSTM-based sequence model for next-word prediction and text generation.",
            tech: ["Python", "TensorFlow", "Keras", "NumPy"],
        },
    ];

    // Benefits
    let benefits = [
    {
        metric: "Data Science",
        name: "Insights from Data",
        description:
            "Strong background in statistical modeling, data preprocessing, and visualization, applying Python, Pandas, and SQL to derive actionable insights.",
    },
    {
        metric: "NLP + GenAI",
        name: "Language Intelligence",
        description:
            "Experience in natural language processing and generative AI, including text classification, embeddings, and large language models for real-world applications.",
    },
    {
        metric: "Deep Learning",
        name: "Neural Architect",
        description:
            "Hands-on expertise with deep learning models for complex tasks in computer vision, speech, and sequence modeling using TensorFlow and PyTorch.",
    },
    {
        metric: "Reinforcement Learning",
        name: "Autonomous Systems",
        description:
            "Implemented RL algorithms such as Q-learning and Deep Q-Networks to create adaptive agents capable of environment-driven decision making.",
    },
];

</script>

<main class="flex flex-col flex-1 p-4">
    <!-- Intro Section -->
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Anjali</span> Yadav
                <br />Python + ML &
                <span class="poppins text-violet-400">GenAI Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                Passionate about <span class="text-violet-400">Data Science, Machine Learning</span>,
                <span class="text-violet-400">Generative AI</span>, and deploying
                intelligent systems using Python, PyTorch, TensorFlow, and modern AI
                frameworks.
            </p>
<a
    href="mailto:anjaliyadavknp9450@gmail.com"  
    class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
>
    <div
        class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
    />
    <h4 class="relative z-9">Get in touch &rarr;</h4>
</a>
        </div>

         <!-- <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"src/images/_photo.png"}
                alt="photo"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div> -->
    </section>

    <!-- ML Projects Section -->
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="ml-projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">Exploring AI Innovation</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My <span class="poppins text-violet-400">Machine Learning</span> Projects
            </h3>
        </div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
    {#each mlProjects as project}
        <Step step={project}>
            <p>{project.description}</p>
            <div class="flex flex-wrap gap-2 mt-3">
                {#each project.tech as t}
                    <span class="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full">{t}</span>
                {/each}
            </div>
            <!-- GitHub Link -->
            <a href={project.link} target="_blank" class="text-indigo-600 font-medium hover:underline mt-2 block">
                View on GitHub →
            </a>
            <!-- Live Demo Link -->
            {#if project.live}
                <a href={project.live} target="_blank" class="text-green-600 font-medium hover:underline mt-1 block">
                    Live Demo →
                </a>
            {/if}
        </Step>
    {/each}
</div>

    </section>

    <!-- DS Projects Section -->
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="ds-projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">Turning Data into Insights</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My <span class="poppins text-violet-400">Data Science</span> Projects
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            {#each dsProjects as project}
                <Step step={project}>
                    <p>{project.description}</p>
                    <div class="flex flex-wrap gap-2 mt-3">
                        {#each project.tech as t}
                            <span class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">{t}</span>
                        {/each}
                    </div>
                    <a href={project.link} target="_blank" class="text-green-600 font-medium hover:underline mt-2 block">
                        View on GitHub →
                    </a>
                </Step>
            {/each}
        </div>
    </section>

    <!-- Skills Section -->
<section id="skills" class="py-20 lg:py-32 flex flex-col gap-16 text-center">
    <div class="flex flex-col gap-4">
        <h6 class="text-lg sm:text-xl md:text-2xl">Core Competencies</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            My <span class="poppins text-violet-400">Skills</span>
        </h3>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto text-left">
        <!-- C++ -->
        <div class="flex flex-col gap-3 bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-violet-400 duration-200">
            <h4 class="text-xl font-semibold">C++ (DSA)</h4>
            <div class="flex flex-wrap gap-2 mt-2">
                <span class="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full">DSA</span>
                <span class="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full">Algorithms</span>
                <span class="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full">Data Structures</span>
                <span class="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full">Problem Solving</span>
            </div>
        </div>

        <!-- Python Developer -->
        <div class="flex flex-col gap-3 bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-violet-400 duration-200">
            <h4 class="text-xl font-semibold">Python Developer</h4>
            <div class="flex flex-wrap gap-2 mt-2">
                <span class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">Python</span>
                <span class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">Flask</span>
                <span class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">FastAPI</span>
                <span class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">OOP</span>
                <span class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">Scripting</span>
            </div>
        </div>

        <!-- Machine Learning / AI -->
        <div class="flex flex-col gap-3 bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-violet-400 duration-200">
            <h4 class="text-xl font-semibold">ML & AI</h4>
            <div class="flex flex-wrap gap-2 mt-2">
                <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">Python</span>
                <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">TensorFlow</span>
                <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">PyTorch</span>
                <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">NLP</span>
                <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">DL</span>
                <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">GenAI</span>
                <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">AI Agents</span>
                <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">LLMs</span>
                <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">Computer Vision</span>
                <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">Reinforcement Learning</span>
            </div>
        </div>

        <!-- Data Science -->
        <div class="flex flex-col gap-3 bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-violet-400 duration-200">
            <h4 class="text-xl font-semibold">Data Science</h4>
            <div class="flex flex-wrap gap-2 mt-2">
                <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Python</span>
                <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">SQL</span>
                <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Pandas</span>
                <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">NumPy</span>
                <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Matplotlib</span>
                <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Seaborn</span>
                <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Scikit-learn</span>
                <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">EDA</span>
                <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Data Cleaning</span>
                <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Feature Engineering</span>
                <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Data Visualization</span>
            </div>
        </div>
    </div>
</section>


    <!-- About Section -->
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Candidate comparison table remains unchanged -->
    </section>



</main>
