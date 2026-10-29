import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.js';

export function StateApis() {
  const [activeTab, setActiveTab] = useState('django');

  const architecturePillars = {
    django: {
      title: "Django REST Framework (DRF)",
      badge: "BACKEND ARCHITECTURE",
      summary: "Structured layered architecture separating Serializers, ViewSets, QuerySets, and Service layers for enterprise-grade scalability.",
      features: [
        "ViewSets with clean ModelViewSet abstraction and custom actions",
        "Declarative ModelSerializers with strict field validation and nested relations",
        "Pagination, query-level filtering, and throttling to eliminate server exhaustion",
        "Idempotent API endpoints and standardized JSON error payloads"
      ],
      codeSnippet: `# Example: Clean DRF ViewSet Pattern
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.select_related('category').prefetch_related('tech_stack')
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = StandardResultsSetPagination`
    },
    database: {
      title: "Normalized Relational Data (PostgreSQL / MySQL)",
      badge: "DATABASE ARCHITECTURE",
      summary: "3NF normalized schema modeling, foreign key indexing, ACID transactional integrity, and query optimization.",
      features: [
        "Third Normal Form (3NF) relational design eliminating redundancy",
        "B-tree index placement on foreign keys and high-frequency search fields",
        "select_related and prefetch_related to eradicate N+1 query bottlenecks",
        "Database constraints, atomic transactions, and automated migration management"
      ],
      codeSnippet: `-- Example: Indexed Relational Schema Design
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    category_id INT REFERENCES categories(id) ON DELETE RESTRICT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX idx_projects_category ON projects(category_id);`
    },
    state: {
      title: "Client-Side Caching & State Management",
      badge: "CLIENT STATE HYDRATION",
      summary: "Efficient state hydration, optimistic UI updates, debounced inputs, and memory disposal.",
      features: [
        "In-memory caching of GET responses to eliminate redundant network roundtrips",
        "Optimistic UI updates with rollback safeguards on mutation failure",
        "Debounced client inputs preventing search API hammering",
        "Strict memory cleanup and event listener disposal on component unmount"
      ],
      codeSnippet: `// Example: Client Caching & Debounced Search
const debouncedSearch = useMemo(
  () => debounce((query) => fetchApiResults(query), 250),
  []
);`
    },
    security: {
      title: "Authentication & Role-Based Access Control",
      badge: "SECURITY PROTOCOLS",
      summary: "Stateless JSON Web Tokens (JWT), token rotation, salted password hashing, and role permissions.",
      features: [
        "Dual-token architecture: short-lived access tokens with rotating refresh tokens",
        "Argon2 / PBKDF2 password hashing by default via Django auth backend",
        "Role-Based Access Control (RBAC) permission classes protecting mutations",
        "CORS origin restrictions, CSP headers, and CSRF token verification"
      ],
      codeSnippet: `# Example: Custom RBAC Permission Class
class IsAdminOrOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_staff or obj.author == request.user`
    }
  };

  const currentPillar = architecturePillars[activeTab];

  return (
    <main
      className="astro-fd3kjnv4"
      data-scene="Capital"
      data-footer="dark"
      data-astro-cid-fd3kjnv4
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}
    >
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Header Title */}
        <div className="border-b border-white/10 pb-10 mb-10">
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-[#8ADEE5] block mb-2">
            03 / BACKEND & SCALABILITY
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-wider text-white">
            STATE & SCALABLE APIS
          </h1>
          <p className="text-base sm:text-lg text-[#BAC7D5] font-light max-w-3xl mt-4 leading-relaxed">
            Engineering robust Django REST APIs, relational schemas with PostgreSQL and MySQL, and high-efficiency client-side state caching.
          </p>

          {/* Interactive Dynamic Architecture Tabs */}
          <div className="flex flex-wrap gap-2.5 mt-8 pt-6 border-t border-white/10">
            {[
              { id: 'django', label: 'Django REST Framework' },
              { id: 'database', label: 'Relational Databases (SQL)' },
              { id: 'state', label: 'Client State & Caching' },
              { id: 'security', label: 'JWT Auth & Security' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#8ADEE5] text-[#051723] shadow-[0_0_12px_rgba(138,222,229,0.4)]'
                    : 'bg-white/5 text-[#BAC7D5] hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Pillar Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Architectural Specifications */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-md">
            <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded bg-[#8ADEE5]/10 text-[#8ADEE5] border border-[#8ADEE5]/30 inline-block mb-3">
              {currentPillar.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-white uppercase tracking-wide">
              {currentPillar.title}
            </h2>
            <p className="text-base text-[#BAC7D5] font-light leading-relaxed mt-4">
              {currentPillar.summary}
            </p>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8ADEE5] block mb-4">
                CORE ENGINEERING PRACTICES
              </span>
              <ul className="flex flex-col gap-3">
                {currentPillar.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/90 font-light">
                    <span className="text-[#8ADEE5] font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Code Architecture Specimen */}
          <div className="lg:col-span-5 bg-black/60 border border-white/15 rounded-2xl p-6 backdrop-blur-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#BAC7D5]">
                <span className="text-[#8ADEE5]">specimen.architecture</span>
                <span>Python / SQL / JS</span>
              </div>
              <pre className="text-xs font-mono text-[#BAC7D5] overflow-x-auto p-4 mt-2 bg-black/40 rounded-lg leading-relaxed border border-white/5">
                <code>{currentPillar.codeSnippet}</code>
              </pre>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#BAC7D5]">
              <span>Verified against PEP 8 & Clean Architecture</span>
              <span className="text-[#8ADEE5]">60 FPS Ready</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
