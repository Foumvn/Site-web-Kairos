"use client";

import * as React from "react";
import {
  CheckCircle2,
  FileText,
  Users,
  Target,
  BarChart3,
  Flag,
  ShieldCheck,
  Zap,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- DATA ---

const PROJECT_TYPES = [
  {
    name: "LÉGER",
    meta: "Petits projets agiles",
    criteria: [
      { label: "Budget", value: "< 50K€" },
      { label: "Durée", value: "< 3 mois" },
      { label: "Équipe", value: "< 5 personnes" },
    ],
    action: "Simplifier : pas de comité de pilotage, reporting mensuel, documents courts.",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    iconColor: "text-emerald-500",
  },
  {
    name: "STANDARD",
    meta: "Projets classiques",
    criteria: [
      { label: "Budget", value: "50-500K€" },
      { label: "Durée", value: "3-12 mois" },
      { label: "Équipe", value: "5-15 personnes" },
    ],
    action: "Appliquer toutes les phases, reporting bimensuel.",
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
    iconColor: "text-blue-500",
  },
  {
    name: "COMPLET",
    meta: "Grands projets stratégiques",
    criteria: [
      { label: "Budget", value: "> 500K€" },
      { label: "Durée", value: "> 12 mois" },
      { label: "Équipe", value: "> 15 personnes" },
    ],
    action: "Ajouter : comité de pilotage, reporting hebdomadaire, audits qualité.",
    color: "bg-purple-500/10 text-purple-600 border-purple-200",
    iconColor: "text-purple-500",
  },
];

const PHASES = [
  {
    id: "phase-1",
    title: "PHASE 1 - DÉMARRAGE",
    objective: "S'assurer qu'on lance le bon projet avec les bonnes personnes",
    icon: Flag,
    content: {
      steps: [
        {
          title: "Comprendre le contexte",
          details: [
            "Pourquoi ce projet maintenant ?",
            "Quels problèmes il résout ?",
            "Qu'est-ce qui se passe dans l'entreprise et autour qui peut influencer le projet ?"
          ]
        },
        {
          title: "Identifier qui est concerné",
          details: [
            "Qui va utiliser les résultats ?",
            "Qui peut bloquer ou aider ?",
            "Qui décide et qui finance ?"
          ]
        },
        {
          title: "Définir les objectifs clairement (SMART)",
          details: [
            "Spécifique, Mesurable, Atteignable, Réaliste, Temporel.",
            "Ex: 'Réduire les délais de 30% d'ici déc. 2026' vs 'Améliorer les livraisons'."
          ]
        },
        {
          title: "Vérifier la faisabilité & les risques",
          details: [
            "Avons-nous les compétences, le budget, le temps ?",
            "Les technologies existent-elles ?",
            "Qu'est-ce qui pourrait faire échouer le projet ?"
          ]
        },
        {
          title: "Créer la charte du projet (1-2 pages)",
          details: [
            "Sponsor, budget estimé, périmètre, date de fin souhaitée."
          ]
        }
      ],
      deliverables: ["Charte projet signée", "Liste des parties prenantes", "Étude de faisabilité validée"],
      decision: "Le sponsor + la direction du département concerné"
    }
  },
  {
    id: "phase-2",
    title: "PHASE 2 - PLANIFICATION",
    objective: "Définir comment réaliser le projet sans se noyer dans les détails",
    icon: FileText,
    content: {
      steps: [
        {
          title: "Monter l'équipe et clarifier les rôles (RACI)",
          details: [
            "R = Responsable (fait le travail)",
            "A = Autorité (valide et décide)",
            "C = Consulté (donne son avis)",
            "I = Informé (reçoit l'info)"
          ]
        },
        {
          title: "Découper le projet",
          details: [
            "Diviser en étapes ou lots de travail.",
            "Identifier les dépendances et fixer les jalons importants."
          ]
        },
        {
          title: "Estimer les besoins & mesurer le succès",
          details: [
            "Budget, personnes, matériel.",
            "Définir 3 à 5 indicateurs clés (KPIs)."
          ]
        },
        {
          title: "Organiser la communication & gérer les changements",
          details: [
            "Qui informe qui, quand et comment ?",
            "Processus de validation des changements (coût, délai, qualité)."
          ]
        },
        {
          title: "Mettre en place les instances",
          details: [
            "Comité de pilotage (Sponsor, Directeurs) : Mensuel/Bimensuel.",
            "Réunion d'équipe : Hebdomadaire."
          ]
        }
      ],
      deliverables: ["Planning détaillé", "Budget détaillé", "Matrice RACI", "Tableau de bord", "Plan de com."],
      decision: "Comité de pilotage ou sponsor"
    }
  },
  {
    id: "phase-3",
    title: "PHASE 3 - RÉALISATION",
    objective: "Produire les résultats en gardant le contrôle",
    icon: Zap,
    content: {
      steps: [
        {
          title: "Travailler par étapes courtes",
          details: [
            "Cycles de 2-4 semaines.",
            "Produire du concret et valider régulièrement avec les utilisateurs."
          ]
        },
        {
          title: "Suivre les indicateurs (KPIs)",
          details: [
            "Vérification hebdomadaire.",
            "🟢 Vert (OK), 🟠 Orange (Risque), 🔴 Rouge (Action immédiate)."
          ]
        },
        {
          title: "Gérer les problèmes & conflits",
          details: [
            "Communiquer de façon transparente.",
            "Escalade : Chef de projet (48h) → Sponsor (1 sem) → Copil (2 sem)."
          ]
        }
      ],
      deliverables: ["Produit/service selon planning", "Comptes-rendus", "Tableaux de bord à jour"],
      decision: "Points de contrôle réguliers"
    }
  },
  {
    id: "phase-4",
    title: "PHASE 4 - FINALISATION",
    objective: "Terminer proprement et transférer aux utilisateurs",
    icon: CheckCircle2,
    content: {
      steps: [
        {
          title: "Valider & Former",
          details: [
            "Tests avec vrais utilisateurs.",
            "Formation et documentation simple (pas de pavé illisible)."
          ]
        },
        {
          title: "Déployer & Transférer",
          details: [
            "Déploiement progressif (pilote puis généralisation).",
            "Passation formelle aux opérations/maintenance."
          ]
        },
        {
          title: "Célébrer",
          details: [
            "Reconnaître le travail de l'équipe et clore le projet."
          ]
        }
      ],
      deliverables: ["Recette signée", "Doc utilisateur & technique", "PV de transfert"],
      decision: "Sponsor + représentant des utilisateurs"
    }
  },
  {
    id: "phase-5",
    title: "PHASE 5 - CAPITALISATION",
    objective: "Apprendre de l'expérience et mesurer la valeur",
    icon: BarChart3,
    content: {
      steps: [
        {
          title: "Revue post-projet",
          details: [
            "Qu'est-ce qui a bien/mal fonctionné ?",
            "Quelles leçons pour la suite ?"
          ]
        },
        {
          title: "Mesurer les bénéfices & Archiver",
          details: [
            "ROI réel vs prévu (3-6 mois après).",
            "Archivage de la charte, planning final, budget."
          ]
        }
      ],
      deliverables: ["Rapport de clôture", "Fiche leçons apprises", "Mesure du ROI"],
      decision: "Clôture administrative"
    }
  }
];

const GLOSSARY = [
  { term: "Charte projet", def: "Document court (1-2 pages) qui officialise le lancement." },
  { term: "COPIL (Comité de pilotage)", def: "Décideurs validant les grandes orientations." },
  { term: "Jalon", def: "Point de contrôle important pour vérifier la trajectoire." },
  { term: "Livrable", def: "Résultat concret produit (doc, logiciel, etc.)." },
  { term: "Matrice RACI", def: "Qui fait quoi (Responsable, Autorité, Consulté, Informé)." },
  { term: "Partie prenante", def: "Personne/groupe impacté ou pouvant influencer le projet." },
  { term: "ROI", def: "Retour sur investissement (Gain vs Coût)." },
  { term: "Sponsor", def: "Personne de haut niveau qui porte et finance le projet." },
];

export function HowItWorksSection({
  title = "Notre Méthodologie",
  eyebrow = "PROCESSUS",
}: {
  title?: string;
  eyebrow?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on how much of the container has been scrolled past
      // Start slightly before the container hits the middle of the screen
      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.2; // Finish when nearly done

      const distance = startTrigger - top;
      const totalDistance = height + (startTrigger - endTrigger) - 300; // Adjust for smoother finish

      if (distance < 0) {
        setScrollProgress(0);
      } else {
        const progress = Math.min(Math.max(distance / totalDistance, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-50 to-transparent blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            {eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 font-[var(--font-brand)] mb-6">
            MÉTHODOLOGIE DE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              GESTION DE PROJETS
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Une approche structurée et adaptable pour garantir le succès de vos initiatives numériques, quelle que soit leur taille.
          </p>
        </div>

        {/* SECTION 1: PROJECT TYPES */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptabilité du Processus</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Nous adaptons notre niveau de formalisme à la complexité de votre projet pour rester agile sans sacrifier la qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECT_TYPES.map((type) => (
              <Card key={type.name} className={cn("p-6 border-t-4 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group bg-white/50 backdrop-blur-sm", type.color)}>
                <div className="mb-6">
                  <h4 className={cn("text-2xl font-bold mb-2 group-hover:scale-105 transition-transform origin-left", type.iconColor)}>{type.name}</h4>
                  <p className="text-sm font-medium opacity-80">{type.meta}</p>
                </div>

                <div className="space-y-4 mb-6">
                  {type.criteria.map((c) => (
                    <div key={c.label} className="flex justify-between items-center text-sm border-b border-gray-200/50 pb-2 last:border-0">
                      <span className="text-gray-600 font-medium">{c.label}</span>
                      <span className="font-bold text-gray-800">{c.value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/80 p-4 rounded-xl text-sm leading-relaxed text-gray-700 shadow-sm">
                  <Zap className={cn("w-4 h-4 mb-2 inline-block mr-2", type.iconColor)} />
                  {type.action}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* SECTION 2: PHASES timeline */}
        <div className="mb-24 relative" ref={containerRef}>
          {/* Timeline track (gray background) */}
          <div className="absolute left-[28px] top-0 bottom-0 w-1 bg-gray-100 hidden md:block rounded-full" />

          {/* Progress Line (Animated) */}
          <div
            className="absolute left-[28px] top-0 w-1 bg-gradient-to-b from-primary via-blue-500 to-primary rounded-full hidden md:block transition-all duration-100 ease-out shadow-[0_0_15px_rgba(56,189,248,0.6)]"
            style={{
              height: `${scrollProgress * 100}%`,
              opacity: scrollProgress > 0 ? 1 : 0
            }}
          />

          <div className="space-y-16">
            {PHASES.map((phase, idx) => {
              // Calculate if this phase is "active" based on progress
              const phaseThreshold = idx / (PHASES.length - 1 || 1);
              const isActive = scrollProgress > phaseThreshold - 0.05; // Slightly earlier activation

              return (
                <div key={phase.id} className="relative md:pl-28 group">
                  {/* Timeline node */}
                  <div
                    className={cn(
                      "hidden md:flex absolute left-0 top-0 w-14 h-14 rounded-full border-4 items-center justify-center z-10 shadow-lg transition-all duration-500",
                      isActive
                        ? "bg-white border-primary scale-110 shadow-primary/30"
                        : "bg-white border-gray-200"
                    )}
                  >
                    <phase.icon className={cn(
                      "w-6 h-6 transition-colors duration-500",
                      isActive ? "text-primary" : "text-gray-400"
                    )} />

                    {/* Pulse effect for active node */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-primary/20 -z-10" />
                    )}
                  </div>

                  {/* Mobile Icon */}
                  <div className="md:hidden flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <phase.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                  </div>

                  <div className={cn(
                    "bg-white border rounded-3xl p-6 md:p-8 transition-all duration-500",
                    isActive
                      ? "border-primary/30 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] translate-x-2"
                      : "border-gray-200 shadow-sm"
                  )}>
                    <div className="hidden md:block mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-primary text-lg font-medium">{phase.objective}</p>
                    </div>
                    <div className="md:hidden mb-6">
                      <p className="text-primary font-medium">{phase.objective}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                      {/* Left: Steps */}
                      <div className="space-y-6">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                          <Target className="w-4 h-4" /> Ce qu'il faut faire
                        </h4>
                        <Accordion type="single" collapsible className="w-full">
                          {phase.content.steps.map((step, stepIdx) => (
                            <AccordionItem key={stepIdx} value={`item-${stepIdx}`} className="border-b-0 mb-3">
                              <AccordionTrigger className="hover:no-underline py-4 px-5 bg-gray-50 hover:bg-white hover:shadow-md rounded-xl text-sm font-semibold text-gray-800 transition-all border border-transparent hover:border-gray-100 data-[state=open]:bg-primary/5 data-[state=open]:text-primary">
                                {step.title}
                              </AccordionTrigger>
                              <AccordionContent className="pt-2 px-5 pb-4 text-gray-600 bg-white rounded-b-xl text-sm leading-relaxed">
                                <ul className="list-disc list-inside space-y-2 mt-2 marker:text-primary">
                                  {step.details.map((d, i) => (
                                    <li key={i}>{d}</li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>

                      {/* Right: Deliverables & Decision */}
                      <div className="flex flex-col gap-6">
                        <div className="bg-slate-50/80 backdrop-blur rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" /> Livrables
                          </h4>
                          <ul className="space-y-3">
                            {phase.content.deliverables.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl p-6 border border-blue-100">
                          <h4 className="font-bold text-sm uppercase tracking-wider text-blue-800/60 mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4" /> Qui décide ?
                          </h4>
                          <p className="text-blue-900 font-medium text-sm">
                            {phase.content.decision}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* SECTION 3: GLOSSARY */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-slate-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700" />

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative z-10">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" /> Glossaire
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Quelques termes clés pour bien comprendre notre méthodologie et parler le même langage.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {GLOSSARY.map((item, idx) => (
                <div key={idx} className="group/item">
                  <dt className="text-white font-semibold text-sm mb-1 group-hover/item:text-primary transition-colors">{item.term}</dt>
                  <dd className="text-slate-400 text-xs leading-relaxed">{item.def}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

