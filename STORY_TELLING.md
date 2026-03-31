# Experience Details

# X-Brain - 2007

In 2007, the market was dominated by Nokia's Symbian. Android was still a project and the iPhone had just launched. At the time, there was resistance to touchscreens because they got greasy, scratched easily, and resistive tech did not feel great. In that context I was invited to join X-Brain. They had an MVC project that allowed NET sales reps to sell cable TV packages from a smartphone, a Nokia E71 with a QWERTY keyboard. I was tasked with evolving the technology and, excited about the Java world, I built a lightweight stack based on JBoss Seam for dependency injection, with JSF/Facelets and RichFaces on the frontend, running on Tomcat 5. The project took off and NET incorporated it as the official sales hub for the Door-to-Door channel. It was a great experience: I maintained everything from Linux servers running on office PCs to UI report design, plus Java backend, databases, migrations, queries, and deployment routines. Maven already existed, but few people used it. Package management was a folder containing all jars inside Subversion, conveniently named `seam4tomcat`, grouping the minimal Seam dependencies to run outside JBoss AS. Deployments were configured with Ant; each NET branch, around 50 of them, had a build entry that set branch parameters, compiled, packaged, and deployed to Tomcat. These were the early days of CI/CD. Everything was R&D: exploring E71 features and building solutions around them. I would say it was the first application in Brazil to do real-time tracking of a large field sales force via smartphone GPS, and one of the first in the world. Few other production systems with this many concurrent users ran on JBoss Seam.

# BRCont and IBPT - 2010

I brought the successful X-Brain stack to a new startup, BRCont, building a public SaaS for comparing corporate financial statements. The idea was to provide fiscal insights from those statements to subscribers and pay freelance accountants to enter the data into the platform. BRCont was acquired by IBPT in under a year and gained new tools like "Lupa no Imposto", which later became part of the software that estimates the tax percentage on each transaction, visible at the bottom of Brazilian invoices, and `empresometro.com.br`, an evolution of the original financial statement comparison tool. During this period, RESTful integrations were gaining ground and more robust stacks using full application servers such as JBoss EE were adopted.

# Accurate and Carrefour - 2012

I joined Accurate right after they launched Carrefour's e-commerce platform in Brazil. The stack mixed Oracle's Java EE suite (ADF) with open-source Java EE components.

# Infracommerce - 2013

Accurate was acquired by Infracommerce, and the original Carrefour e-commerce platform was evolved into a marketplace (one of the first in Brazil), which later became Extra.com.br. Besides the day-to-day work of evolving the platform to multi-tenant and then to marketplace, I led a restructuring of the pricing model, migrating from product-only pricing to a hybrid model that supported both product and SKU pricing. I also actively participated with the Infra team in deployment routines, still in a very manual way: consolidating release tickets, writing deployment procedures, rollback plans, and scripts. This included long overnight releases, working with QA on regression tests, and fixing last-minute bugs in pre-production.

# X-Brain - 2014

I was invited back to X-Brain in 2014 for a new challenge. Claro had acquired NET, and the mission was to integrate Claro's catalog into the sales system we had built for NET. During this period, I developed a predictive dialer based on VoIP technology that automatically called customers and allocated an available agent. The idea was to optimize sales through call automation, saving operators from manually dialing and waiting. The system only assigned an operator once the customer was already on the line. I also explored NLP models and AI platforms like the then-revolutionary IBM Watson, building an autonomous chatbot that could answer questions related to the company's product catalog.

# Navita - 2018

My first experience with a fully remote team, working as a Java engineer on a platform for auditing telecom bills. This was the shift from Java EE to Spring Boot, which was becoming the market standard at the time. It was my first exposure to cloud-native tools like AWS ECS and to JavaScript applications running in the browser, based on AngularJS.

# Belagricola - Farmbits - 2019

Belagricola was one of the largest grain traders in Brazil and was starting a digital initiative to better serve customers. I was invited to launch a project separate from their established SAP landscape, fully digital, web-based, and containerized. I was responsible for creating and maintaining the EKS cluster and the service-based architecture that supported Spring Boot web applications and Flutter mobile apps (the documentation still recommended against production use at the time). The challenge was to lead a small team and work across the stack: Kubernetes ops, Spring Boot backend, and client-side applications in VueJS and Flutter. We replicated SAP pricing and inventory composition logic entirely offline on mobile, allowing agronomists to consult products and generate quotes offline in the most remote regions of rural Brazil, where telecom connectivity was practically nonexistent.

# Avenue Code and eBay - 2022

I joined eBay's SEO team after a complex interview process that lasted around 60 days, with 5 or 6 sessions covering code challenges, design reviews, and technical deep dives. Since then I've been working on solutions ranging from ingesting billions of messages per day to processing large data volumes for insights. I had the opportunity to specify and develop projects spanning large-scale DOM processing to MCP servers for LLM interoperability. The stack is varied, including Python, PySpark, Java, Node, JavaScript, and shell scripting.
