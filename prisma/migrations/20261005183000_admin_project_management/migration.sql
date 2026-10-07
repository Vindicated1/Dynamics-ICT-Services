CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT,
    "year" TEXT,
    "services" TEXT[] NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "showOnProjects" BOOLEAN NOT NULL DEFAULT true,
    "showOnHomepage" BOOLEAN NOT NULL DEFAULT false,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
CREATE INDEX "Project_isPublished_showOnProjects_sortOrder_idx"
    ON "Project"("isPublished", "showOnProjects", "sortOrder");
CREATE INDEX "Project_isPublished_showOnHomepage_isFeatured_sortOrder_idx"
    ON "Project"("isPublished", "showOnHomepage", "isFeatured", "sortOrder");

INSERT INTO "Project" (
    "id", "title", "slug", "category", "description", "image",
    "location", "year", "services", "isPublished", "showOnProjects",
    "showOnHomepage", "isFeatured", "sortOrder", "updatedAt"
) VALUES
    ('seed-project-enterprise-network', 'Enterprise Network Infrastructure', 'enterprise-network-infrastructure', 'Networking', 'A structured networking infrastructure designed to provide reliable, secure and scalable connectivity for an organization.', '/images/projects/networking.jpg', 'Ibadan, Nigeria', '2025', ARRAY['Structured Cabling', 'Network Infrastructure', 'Wi-Fi Deployment'], true, true, false, false, 10, CURRENT_TIMESTAMP),
    ('seed-project-solar-energy', 'Solar Energy Installation', 'solar-energy-installation', 'Solar Energy', 'A renewable energy installation designed to provide dependable power and reduce reliance on conventional electricity sources.', '/images/projects/solar.jpg', 'Ibadan, Nigeria', '2025', ARRAY['Solar Installation', 'Inverter System', 'Battery Storage'], true, true, false, false, 20, CURRENT_TIMESTAMP),
    ('seed-project-cctv', 'CCTV Surveillance System', 'cctv-surveillance-system', 'Security', 'A professional surveillance deployment providing monitoring, recording and improved security visibility across a facility.', '/images/projects/cctv.jpg', 'Ibadan, Nigeria', '2025', ARRAY['CCTV Installation', 'NVR Configuration', 'Remote Monitoring'], true, true, false, false, 30, CURRENT_TIMESTAMP),
    ('seed-project-business-software', 'Custom Business Software', 'custom-business-software', 'Software', 'A customized software solution developed to streamline business operations and improve productivity.', '/images/projects/software.jpg', 'Nigeria', '2025', ARRAY['Software Development', 'UI/UX Design', 'Database Development'], true, true, false, false, 40, CURRENT_TIMESTAMP),
    ('seed-project-website', 'Business Website Development', 'business-website-development', 'Web Development', 'A responsive business website designed to strengthen online presence, improve user experience and support business growth.', '/images/projects/web-development.jpg', 'Nigeria', '2025', ARRAY['Web Development', 'Responsive Design', 'SEO'], true, true, false, false, 50, CURRENT_TIMESTAMP),
    ('seed-project-automation', 'Smart Automation System', 'smart-automation-system', 'Automation', 'A smart automation solution connecting technology and infrastructure to improve convenience, efficiency and control.', '/images/projects/automation.jpg', 'Ibadan, Nigeria', '2025', ARRAY['Automation', 'IoT Integration', 'Smart Systems'], true, true, false, false, 60, CURRENT_TIMESTAMP),
    ('seed-home-school-portal', 'University School Portal', 'school-portal', 'Software', 'Complete student information management system with online admissions, payments and result processing.', '/images/portfolio/school-portal.jpg', NULL, NULL, ARRAY['Next.js', 'Laravel', 'MySQL'], true, false, true, true, 10, CURRENT_TIMESTAMP),
    ('seed-home-solar', 'Commercial Solar Installation', 'solar', 'Solar', '100kVA hybrid solar power solution for uninterrupted business operations.', '/images/portfolio/solar.jpg', NULL, NULL, ARRAY['Solar', 'Hybrid', 'Battery'], true, false, true, false, 20, CURRENT_TIMESTAMP),
    ('seed-home-security', 'Enterprise Security System', 'security', 'Security', 'Integrated CCTV, access control and monitoring solution for a corporate office.', '/images/portfolio/security.jpg', NULL, NULL, ARRAY['CCTV', 'Access Control'], true, false, true, false, 30, CURRENT_TIMESTAMP),
    ('seed-home-network', 'Corporate Network Infrastructure', 'network', 'Networking', 'Structured cabling, enterprise Wi-Fi and firewall deployment.', '/images/portfolio/network.jpg', NULL, NULL, ARRAY['Cisco', 'Wi-Fi', 'Firewall'], true, false, true, false, 40, CURRENT_TIMESTAMP),
    ('seed-home-mobile-app', 'Business Mobile Application', 'mobile', 'Software', 'Cross-platform mobile application with real-time reporting.', '/images/portfolio/mobile.jpg', NULL, NULL, ARRAY['Flutter', 'Firebase'], true, false, true, false, 50, CURRENT_TIMESTAMP),
    ('seed-home-website', 'Corporate Digital Platform', 'website', 'Web', 'Modern responsive corporate website with SEO optimisation.', '/images/portfolio/website.jpg', NULL, NULL, ARRAY['Next.js', 'SEO'], true, false, true, false, 60, CURRENT_TIMESTAMP);
