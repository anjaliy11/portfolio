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
    
    let genAIProjects = [
    {
        name: "AlgebrAI",
        link: "https://github.com/anjaliy11/AlgebrAI",
        live: "https://algebrai-ikmdmzjwiwdldpnssu2ez6.streamlit.app/", 
        description:
            "AI-powered algebra problem solver and explainer using language models to guide step-by-step solutions.",
        tech: ["Python", "Groq", "LangChain", "GenAI"],
    },
    {
        name: "URL2Summary_AI",
        link: "https://github.com/anjaliy11/URL2Summary_AI",
        description:
            "A GenAI-powered Streamlit app that summarizes content from YouTube videos or website URLs. Built using LangChain, Groq LLaMA models, and supports English & Hindi transcripts with chunked summarization.",
        tech: ["Python", "Streamlit", "LangChain", "Groq", "LLaMA", "YouTubeTranscriptApi", "Validators"],
    },
    {
        name: "Hybrid Search RAG",
        link: "https://github.com/anjaliy11/Hybrid_Search_RAG",
        description:
            "Retrieval-Augmented Generation system combining vector search and keyword search for accurate LLM responses.",
        tech: ["Python", "LangChain", "Pinecone", "RAG", "LLMs"],
    }
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

// Certificates
let certificates = [
    {
        title: "Advanced SQL Course",
        issuer: "Kaggle",
        link: "https://www.kaggle.com/learn/certification/shally25/advanced-sql",
        skills: ["Advanced SQL", "Joins", "Window Functions", "Query Optimization"],
    },
    {
        title: "Generative AI with Langchain & Huggingface",
        issuer: "Udemy",
        link: "https://www.udemy.com/certificate/UC-307b1665-64fb-4271-b748-046b1ad6a3c4/",
        skills: ["Python", "Machine Learning", "Data Science"],
    },
    {
        title: "NVIDIA Deep Learning Fundamentals",
        issuer: "NVIDIA",
        link: "https://learn.nvidia.com/certificates?id=qzBU0Q0kRTqSv6AMBZe9cg",
        skills: ["Deep Learning", "Neural Networks", "GPU Computing"],
    },
    {
        title: "Software Engineering Virtual Experience Program",
        issuer: "Goldman Sachs (Forage)",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_Rp7FjPaEk85qin2BE_1726032491200_completion_certificate.pdf",
        skills: ["Data Analysis", "Financial Modeling", "Business Insights"],
    },
    {
        title: "Data Analytics & Visualization Virtual Experience Program",
        issuer: "Accenture North America (Forage)",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_Rp7FjPaEk85qin2BE_1716808539370_completion_certificate.pdf",
        skills: ["Data Analytics", "Visualization", "Business Problem Solving"],
    },
];
// Achievements
let achievements = [
    {
        title: "Smart India Hackathon (SIH) 2024",
        subtitle: "Finalist",
        logo: "/src/images/sih.png",
        // icon: "🏆",
        description: "Selected among top teams nationwide for building an ML-based real-world problem solution."
    },
    {
        title: "GirlScript Summer of Code",
        subtitle: "Contributor (2024, 2025)",
        logo: "/src/images/GSSOC.png",
        description: "Open-source contributor working on real-world projects, code quality, and collaboration."
    },
    {
        title: "Unstop",
        subtitle: "Student Executive at Campus Ambassador Program (2024)",
        logo: "/src/images/unstop.png",
        description: "Represented Unstop at campus level, driving engagement, outreach, and technical events."
    },
    {
        title: "Slumswaraj Foundation",
        subtitle: "Volunteer (NGO)",
        logo: "/src/images/SSF.webp",
        description: "Volunteered for social impact initiatives focused on education and community upliftment."
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
            <h2 class="font-semibold text-3xl sm:text-4xl md:text-6xl">
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

<!-- Tech Badges -->
<div class="flex gap-2 mt-4 overflow-x-auto sm:flex-wrap scrollbar-hide">
    {#each ["Python", "ML", "GenAI", "LangChain", "RAG", "FastAPI"] as tech}
        <span
            class="shrink-0 px-4 py-1 text-sm bg-slate-900 border border-violet-800 text-violet-300 rounded-full"
        >
            {tech}
        </span>
    {/each}
</div>

<!-- Terminal Line
<p class="mt-4 font-mono text-sm sm:text-base text-green-400">
    <span class="text-gray-500">$</span> building_ai_solutions --from-data --to-deployment
</p> -->




<div class="flex flex-col sm:flex-row gap-4 mt-6">
    <a
        href="mailto:anjaliyadavknp9450@gmail.com"
        class="text-base sm:text-lg px-6 py-3 rounded-full 
               bg-gradient-to-r from-violet-500 to-indigo-500 
               text-white font-medium
               hover:from-violet-600 hover:to-indigo-600
               duration-200 text-center shadow-md"
    >
        Get in touch →
    </a>

    <a
        href="#ml-projects"
        class="text-base sm:text-lg px-6 py-3 rounded-full 
               border border-violet-500 text-violet-400
               hover:bg-violet-900/30 duration-200 text-center"
    >
        View Projects
    </a>
</div>
</div>
<!-- Right Side Tech Visual -->
<div class="hidden lg:flex items-center justify-center">
    <div class="bg-slate-900 border border-violet-800 rounded-2xl p-6 w-full max-w-md shadow-xl">
        <!-- Header -->
        <div class="flex items-center gap-2 mb-4">
            <span class="w-3 h-3 rounded-full bg-red-500"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span class="w-3 h-3 rounded-full bg-green-500"></span>
            <p class="ml-auto text-xs text-gray-400 font-mono">
                ai_pipeline.py
            </p>
        </div>

        <!-- Code -->
        <pre class="text-sm font-mono text-left text-gray-300 leading-relaxed">
<span class="text-violet-400">def</span> <span class="text-green-400">build_ai_solution</span>(data):
    features = preprocess(data)
    model = train(features)
    metrics = evaluate(model)
    deploy(model)
    <span class="text-violet-400">return</span> metrics
        </pre>
    </div>
</div>



<!-- <p class="text-center text-gray-400 italic mt-24">
    “Good models are built. Great models are shipped.”
</p> -->


         <!-- <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"src/images/_photo.png"}
                alt="photo"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div> -->
    </section>

    <!-- ML Projects Section -->
    <section class="py-16 sm:py-20 lg:py-28
flex flex-col gap-24" id="ml-projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">Exploring ML Algorithms</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My <span class="poppins text-violet-400">Machine Learning</span> Projects
            </h3>
        </div>
        <div class="mx-auto h-1 w-24 bg-violet-500 rounded-full"></div>

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
<div class="w-full h-px bg-gradient-to-r from-transparent via-violet-700 to-transparent my-24"></div>

    <!-- GenAI Projects Section -->
<section class="py-16 sm:py-20 lg:py-28 flex flex-col gap-24" id="genai-projects">
    <div class="flex flex-col gap-2 text-center">
        <h6 class="text-large sm:text-xl md:text-2xl">
            Building with Large Language Models
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            My <span class="poppins text-violet-400">GenAI</span> Projects
        </h3>
    </div>
<div class="mx-auto h-1 w-24 bg-violet-500 rounded-full"></div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        {#each genAIProjects as project}
            <Step step={project}>
                <p>{project.description}</p>

                <div class="flex flex-wrap gap-2 mt-3">
                    {#each project.tech as t}
                        <span
                            class="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full"
                        >
                            {t}
                        </span>
                    {/each}
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    class="text-purple-600 font-medium hover:underline mt-2 block"
                >
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

<div class="w-full h-px bg-gradient-to-r from-transparent via-violet-700 to-transparent my-24"></div>

    <!-- DS Projects Section -->
    <section class="py-16 sm:py-20 lg:py-28 flex flex-col gap-24" id="ds-projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">Turning Data into Insights</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My <span class="poppins text-violet-400">Data Science</span> Projects
            </h3>
        </div>
        <div class="mx-auto h-1 w-24 bg-violet-500 rounded-full"></div>

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


<div class="w-full h-px bg-gradient-to-r from-transparent via-violet-700 to-transparent my-24"></div>


    <!-- Skills Section -->
<section id="skills" class="py-16 sm:py-20 lg:py-28 flex flex-col gap-16 text-center">
    <div class="flex flex-col gap-4">
        <h6 class="text-lg sm:text-xl md:text-2xl">Core Competencies</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            My <span class="poppins text-violet-400">Skills</span>
        </h3>
    </div>
<div class="mx-auto h-1 w-24 bg-violet-500 rounded-full"></div>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
<!-- <span class="px-3 py-1 text-xs sm:text-sm ..."> -->

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

<!-- Machine Learning / AI & GenAI -->
<!-- ML, AI & GenAI -->
<div class="flex flex-col gap-3 bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-violet-400 duration-200">
    <h4 class="text-xl font-semibold">ML, AI & GenAI</h4>
    <div class="flex flex-wrap gap-2 mt-2">
        <!-- Core ML & Programming -->
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">Python</span>
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">Machine Learning</span>
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">Deep Learning</span>
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">Reinforcement Learning</span>

        <!-- NLP & GenAI -->
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">NLP</span>
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">Generative AI</span>
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">LLMs</span>
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">RAG</span>
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">LangChain</span>

        <!-- Deployment & Tools -->
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">Streamlit</span>
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">Flask</span>
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">FastAPI</span>

        <!-- AI Agents & Vision -->
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">AI Agents</span>
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">Computer Vision</span>
        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">Predictive Analytics</span>
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
<div class="w-full h-px bg-gradient-to-r from-transparent via-violet-700 to-transparent my-24"></div>

<!-- Certificates Section -->
<section id="certificates" class="py-16 sm:py-20 lg:py-28 flex flex-col gap-20">
    <div class="flex flex-col gap-2 text-center">
        <h6 class="text-large sm:text-xl md:text-2xl">
            Continuous Learning & Credentials
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            My <span class="poppins text-violet-400">Certificates</span>
        </h3>
    </div>
    <div class="mx-auto h-1 w-24 bg-violet-500 rounded-full"></div>


    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {#each certificates as cert}
            <div class="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-violet-400 duration-300 flex flex-col gap-4">
                <h4 class="text-xl font-semibold text-white">
                    {cert.title}
                </h4>

                <p class="text-sm text-violet-300 font-medium">
                    Issued by {cert.issuer}
                </p>

                <div class="flex flex-wrap gap-2 mt-2">
                    {#each cert.skills as skill}
                        <span class="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full">
                            {skill}
                        </span>
                    {/each}
                </div>

                <a
                    href={cert.link}
                    target="_blank"
                    class="mt-3 text-indigo-400 font-medium hover:underline"
                >
                    View Certificate →
                </a>
            </div>
        {/each}
    </div>
</section>
<div class="w-full h-px bg-gradient-to-r from-transparent via-violet-700 to-transparent my-24"></div>

<!-- Achievements Section -->
<section id="achievements" class="py-16 sm:py-20 lg:py-28 flex flex-col gap-20">
    <div class="flex flex-col gap-2 text-center">
        <h6 class="text-large sm:text-xl md:text-2xl">
            Milestones & Recognition
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            My <span class="poppins text-violet-400">Achievements</span>
        </h3>
    </div>
<div class="mx-auto h-1 w-24 bg-violet-500 rounded-full"></div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {#each achievements as ach}
            <div class="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-violet-400 duration-300 flex flex-col gap-4 group">
    
                                <!-- Logo -->
                <div class="h-14 flex items-center">
                    <img
                        src={ach.logo}
                        alt={ach.title}
                        class="h-12 object-contain group-hover:scale-105 duration-300"
                    />
                </div>
                <!-- Title -->
                <h4 class="text-lg font-semibold text-white">
                    {ach.title}
                </h4>

                <!-- Subtitle -->
                <p class="text-sm font-medium text-violet-300">
                    {ach.subtitle}
                </p>

                <!-- Description -->
                <p class="text-sm text-gray-400">
                    {ach.description}
                </p>
            </div>
        {/each}
    </div>
</section>

<div class="w-full h-px bg-gradient-to-r from-transparent via-violet-700 to-transparent my-24"></div>
    <section class="py-20 text-center max-w-4xl mx-auto">
    <h3 class="text-3xl font-semibold">
        How I <span class="poppins text-violet-400">Approach Problems</span>
    </h3>
    <p class="mt-6 text-gray-400">
        Understand data → choose the right model → iterate →
        evaluate → deploy with scalability in mind.
    </p>
</section>

    <!-- About Section -->
    <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
>   
    <!-- Section Header -->
    <div
        class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
        <h6 class="text-lg sm:text-xl md:text-2xl uppercase tracking-wider text-violet-300">
            Want to know more?
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            A bit <span class="poppins text-violet-400">about</span> me
        </h3>
    </div>

    <!-- Intro -->
    <p class="mx-auto poppins font-medium text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl">
        Blending <span class="text-violet-400 font-semibold">Data Science</span>, 
        <span class="text-violet-400 font-semibold">Machine Learning</span>, 
        <span class="text-violet-400 font-semibold">Generative AI</span> and software development to build 
        intelligent systems, real-world AI solutions, and scalable applications. I love experimenting with new 
        technologies, optimizing processes, and creating impact through code.
    </p>

    <!-- Fun + Technical Highlights -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl mx-auto mt-12">
        {#each benefits as benefit, index}
            <div class="flex gap-4 bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-violet-400 duration-300 group">
                <!-- Number Bubble -->
                <div class="flex items-center justify-center w-16 h-16 rounded-full bg-violet-700 text-white text-2xl font-bold group-hover:scale-110 duration-300">
                    {index + 1}
                </div>

                <!-- Text Content -->
                <div class="flex flex-col gap-2">
                    <h4 class="text-xl sm:text-2xl font-semibold flex items-center gap-2">
                        {benefit.name}
                        <!-- Optional icon -->
                        <span class="text-violet-400">⚡</span>
                    </h4>
                    <p class="text-gray-300 text-sm sm:text-base">
                        {benefit.description}
                    </p>
                </div>
            </div>
        {/each}
    </div>




    <!-- Optional Fun Section -->
    <div class="mt-16 text-center text-gray-400">
        <p class="text-lg sm:text-xl md:text-2xl italic">
            "Turning data into insights, code into action, and ideas into AI-powered solutions."
        </p>
    </div>
</section>




</main>
