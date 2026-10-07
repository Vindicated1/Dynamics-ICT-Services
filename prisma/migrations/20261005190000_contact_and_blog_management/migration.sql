CREATE TABLE "BlogArticle" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT[] NOT NULL,
    "authorName" TEXT NOT NULL,
    "authorRole" TEXT,
    "image" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "readingTime" INTEGER NOT NULL DEFAULT 1,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BlogArticle_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "BlogArticle_slug_key" ON "BlogArticle"("slug");
CREATE INDEX "BlogArticle_isPublished_isFeatured_publishedAt_idx"
    ON "BlogArticle"("isPublished", "isFeatured", "publishedAt");

INSERT INTO "BlogArticle" (
    "id", "title", "slug", "excerpt", "content", "category", "tags",
    "authorName", "authorRole", "image", "publishedAt", "readingTime",
    "isFeatured", "isPublished", "updatedAt"
) VALUES
(
    'seed-blog-post-1',
    'How Technology Can Transform Your Business',
    'how-technology-can-transform-your-business',
    'Discover how modern technology solutions can help businesses improve productivity, security, efficiency and long-term growth.',
    $$Technology is becoming an essential part of modern business operations.

From business software and cloud solutions to networking, cybersecurity and renewable energy systems, organizations can use technology to improve the way they work.

The right technology solution should not simply introduce new tools. It should solve real business problems, improve efficiency and create measurable value.

Businesses should therefore evaluate their current operations, identify areas that can be improved and implement technology solutions that support their long-term goals.$$,
    'Business Technology',
    ARRAY['Business Technology', 'Digital Transformation', 'Technology'],
    'Dynamics ICT Services',
    'Technology Team',
    '/images/blog/technology-business.jpg',
    '2026-08-01',
    5,
    true,
    true,
    CURRENT_TIMESTAMP
),
(
    'seed-blog-post-2',
    'Why Cybersecurity Matters for Modern Businesses',
    'why-cybersecurity-matters-for-modern-businesses',
    'Learn why cybersecurity should be an essential part of every organization''s technology strategy.',
    $$Cybersecurity is no longer only a concern for large technology companies.

Businesses of every size rely on computers, networks, applications and digital information. Protecting these resources is therefore an important part of maintaining business continuity.

Organizations should consider measures such as secure network infrastructure, access control, endpoint protection, backups and security monitoring.

A strong cybersecurity strategy combines technology, processes and employee awareness.$$,
    'Cybersecurity',
    ARRAY['Cybersecurity', 'Network Security', 'Data Protection'],
    'Dynamics ICT Services',
    'Cybersecurity Team',
    '/images/blog/cybersecurity.jpg',
    '2026-08-05',
    6,
    true,
    true,
    CURRENT_TIMESTAMP
),
(
    'seed-blog-post-3',
    'Building Reliable Network Infrastructure',
    'building-reliable-network-infrastructure',
    'A reliable network infrastructure provides the foundation for communication, collaboration and digital business operations.',
    $$A reliable network is one of the foundations of modern organizational infrastructure.

Businesses depend on networks for communication, internet access, cloud applications, file sharing, security systems and many other services.

Proper planning is therefore important when designing a network.

Structured cabling, wireless coverage, routing, switching, network security and monitoring should all be considered when developing a reliable infrastructure.$$,
    'Networking',
    ARRAY['Networking', 'Infrastructure', 'Wi-Fi', 'Structured Cabling'],
    'Dynamics ICT Services',
    'Network Engineering Team',
    '/images/blog/networking.jpg',
    '2026-08-08',
    5,
    false,
    true,
    CURRENT_TIMESTAMP
),
(
    'seed-blog-post-4',
    'The Benefits of Custom Business Software',
    'benefits-of-custom-business-software',
    'Custom software can help organizations automate processes, improve productivity and build systems around their specific business requirements.',
    $$Every organization has its own processes and operational requirements.

Off-the-shelf software can provide useful functionality, but some businesses require systems designed specifically around their workflows.

Custom software development allows organizations to build applications around their operational requirements.

Business applications can be used to automate repetitive processes, organize information, improve reporting and support better decision-making.$$,
    'Software Development',
    ARRAY['Software Development', 'Business Software', 'Automation', 'Digital Transformation'],
    'Dynamics ICT Services',
    'Software Development Team',
    '/images/blog/software-development.jpg',
    '2026-08-10',
    6,
    false,
    true,
    CURRENT_TIMESTAMP
),
(
    'seed-blog-post-5',
    'Understanding the Benefits of Solar Energy',
    'understanding-the-benefits-of-solar-energy',
    'Solar energy can provide organizations with a reliable alternative source of electricity while helping reduce dependence on conventional power sources.',
    $$Reliable electricity is important for homes, businesses and institutions.

Solar energy provides an alternative approach to power generation by combining solar panels, inverters and battery storage systems.

A properly designed solar installation can provide backup power, reduce generator dependence and support more predictable energy management.

Before installing a solar system, organizations should assess their energy consumption and determine the appropriate system capacity.$$,
    'Solar Energy',
    ARRAY['Solar Energy', 'Renewable Energy', 'Power Solutions'],
    'Dynamics ICT Services',
    'Energy Solutions Team',
    '/images/blog/solar-energy.jpg',
    '2026-08-12',
    5,
    false,
    true,
    CURRENT_TIMESTAMP
),
(
    'seed-blog-post-6',
    'Digital Transformation: Where Should Your Business Start?',
    'digital-transformation-where-should-your-business-start',
    'Digital transformation does not have to happen all at once. Learn how businesses can identify priorities and introduce technology strategically.',
    $$Digital transformation is a continuous process of improving business operations through technology.

Organizations do not necessarily need to replace every existing system at once.

A better approach is to identify operational challenges, determine which areas provide the greatest opportunity for improvement and introduce solutions gradually.

This may involve business software, cloud services, networking, cybersecurity, automation or digital marketing.

The most successful technology strategy is one that aligns technology investments with actual business objectives.$$,
    'Digital Transformation',
    ARRAY['Digital Transformation', 'Business Technology', 'Automation', 'Cloud Computing'],
    'Dynamics ICT Services',
    'Technology Consulting Team',
    '/images/blog/digital-transformation.jpg',
    '2026-08-15',
    6,
    true,
    true,
    CURRENT_TIMESTAMP
);
