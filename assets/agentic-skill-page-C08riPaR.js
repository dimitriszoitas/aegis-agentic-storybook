import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./lib-CmqoA_Vh.js";import{a,c as o,i as s,n as c,o as ee,r as te,s as ne,t as re}from"./TabsList-DhlJL4mP.js";import{n as ie,t as ae}from"./copy-button-D82jpMcK.js";import{i as l,n as oe,r as se,t as ce}from"./documentation-link-BeVSCBah.js";var u;function d(){return(d=e((()=>{u=`---
name: create-component
description: 'Create or extend reusable React components in this repository with Base UI behavior, group tokens, public APIs, and source-backed documentation. Use for component work, not for a page that can be composed from existing components.'
---

# Component creation

Read [the shared design contract](../references/design-contract.md) before changing an API or visual treatment. It defines the required token tiers, theme matrix, naming scales, and focus behavior.

## Find the right component boundary

Inspect the Directory, public exports, implementation, and existing stories before creating a new family. Search equivalent vocabulary without treating names as equivalent behavior: a Tag is not automatically a StatusBadge; Select, DropdownMenu, and MultiCombobox solve different tasks; a Field supplies labeling and validation rather than a text input implementation.

Extend the existing component when its responsibility and interaction model match. Create a new component when the requested behavior has a distinct reusable contract. Keep application data, routing, and product-specific decisions in the consuming pattern or application.

## Separate behavior from appearance

Use the installed \`@base-ui/react\` primitives for applicable interactive behavior. Inspect their current exported types and the nearest migrated component before composing parts. Preserve keyboard navigation, controlled state, native form behavior, labeling, disabled state, dismissal, and focus return through the primitive API. Use native elements for simple static content or interactions that do not need a composite primitive.

Keep the headless package entry free of styles and application logic. Put styling in the component's scoped stylesheet and consume only the group namespace assigned to its sidebar category in \`tokens/component-categories.json\`. All Trigger implementations use \`--group-trigger-*\`, including their own icon dimensions and defaults. Actual nested shared components keep their own category tokens; importing a utility or token registry is not nesting. Select variants through props and state attributes. Do not move color, radius, shadow, or spacing choices into the behavior layer or branch the component on a theme name.

Use \`:focus-visible\` for keyboard focus treatment. Do not add a focus ring or outline merely because a control has pointer focus. A quiet active border may remain. Keep keyboard focus clearly visible, including in forced-colors mode. Preserve native focus, focus guards, and deliberate focus handoffs.

## Define the public contract

Follow the nearest component folder convention: implementation, scoped stylesheet, public index, and focused stories. Export public prop types. Make controlled and uncontrolled behavior explicit when both are supported. Forward the intended primitive/root props, refs, and accessibility attributes without accidentally dropping lifecycle callbacks.

Model intent, emphasis, size, and state as separate concerns. Reuse existing names when their meaning matches; do not introduce a new option only to reproduce a value already represented by the group tokens. A default design value belongs in the token system, while user data and measured geometry remain runtime values.

## Document and verify the real behavior

Add a useful standalone example, relevant states, and a focused interaction story. Provide an actual annotated Anatomy specimen with optional parts enabled; use real DOM selectors rather than a story matrix. Maintain purpose, usage, accessibility, API, token, and in-context guidance. Never hand-edit generated metadata.

Provide an args-driven Playground story for the Overview. Forward its controls to the actual component, including meaningful variants, sizes, states, and optional parts. Keep interactive state synchronized with changed args. Use serializable story options to select icons or other React elements; never expose inert controls for a fixed matrix or ask users to edit React nodes as JSON. The Overview centers the specimen and displays its controls beside it. Choice sets with up to four options use a segmented control; larger sets use a dropdown. Reset must restore the example, and theme changes must preserve its edited settings.

Check the four Fundamental/Fundamental Floating and light/dark combinations. The same size variant must keep its dimensions, font metrics, and spacing in all four. Verify the applicable keyboard behavior, pointer behavior, names, disabled/error states, overlays, and mobile fit. Include reduced-motion or forced-colors checks when the component uses those features. An axe pass supplements native interaction checks; it does not replace them.

Run scoped formatting/lint and the repository checks relevant to the change. If public exports change, verify the package entry and consumer types. Coordinate the final documentation generation with other work so one generation uses a stable source snapshot. Report what changed, what was verified, and any remaining limitation.

For additions to the reusable library, follow [authored contract coverage](../references/agentic-contract.md#new-components): bind the real implementation and public entry, preserve component/host ownership, and pass the coverage gate. Keep generated API facts, written requirements and executed evidence distinct.

## Link behaviour to executable acceptance

Give authored requirements stable IDs and distinguish component, host and design responsibilities. Reuse a registered scenario from \`scripts/acceptance/\` when it measures the relevant behaviour, and link its exact requirement and context. Add a new scenario when the behaviour needs one; do not mark a broad clause passed from an unrelated smoke test. Preserve source/oracle hashes, theme, width and passed/failed/not-run/unsupported status. The shared runner covers finite workflows, not the whole test suite. See \`docs/ACCEPTANCE.md\`. A repair proposal must preserve its oracle and the content being verified; missing repair coverage requires review, not a fabricated pass.
`})))()}var f;function p(){return(p=e((()=>{f=`---
name: create-token
description: 'Create, map, or migrate design tokens in this repository across Primitive, Semantic, and Group tiers. Use for token definitions, naming, theme mappings, and reference migrations, not for arbitrary runtime data or measured geometry.'
---

# Token creation

Read [the shared design contract](../references/design-contract.md) first. Its tier boundaries and naming scales are requirements, not suggestions to approximate with the current file names.

## Import or exchange an existing language

For a complete Aegis profile, use the versioned brand package and preview its field changes before explicitly applying them. For external DTCG JSON, inspect aliases, inherited types and diagnostics, then supply explicit token-to-profile mappings. Unmapped values remain unchanged. Unsupported types, expressions, color spaces and missing references must remain visible as diagnostics; never silently approximate them or bypass the token tiers. Export emits one document per theme/mode. See \`docs/BRAND-PACKAGES.md\` for the supported subset and the distinction between a design seed and a resolved color.

## Trace before adding

Identify the property, owning sidebar category from \`tokens/component-categories.json\`, existing role, value source, consumers, and all four theme mappings. Search CSS, TypeScript, generated stylesheet inputs, package exports, stories, and documentation. Record computed values before a migration so refactoring references does not silently restyle the system.

Choose the tier by responsibility:

- A primitive is an exact, context-free value or scale entry.
- A semantic token expresses a shared design role and references only primitives.
- A group token gives that role a descriptive name within the sidebar category and references only semantic tokens. All Trigger implementations use \`--group-trigger-*\`; do not introduce separate Button or Link top-level groups.
- A component consumes only its own category group tokens; it does not reach through to semantic or primitive tokens or borrow another category. A real nested child component independently retains its own category bindings.

Keep measured positions, user-resized widths, progress, and supplied content data outside the design-token catalog. A fixed default, minimum, maximum, icon size, or animation duration is still a design decision and must follow the tiers, even if JavaScript reads it.

## Define the mapping

Use an existing exact primitive when possible. Add an appropriate primitive when the required value is absent; do not choose the nearest color or dimension merely to avoid adding a value. Keep raw values in the primitive source and maintain any generated outputs through their owning generator.

Every semantic token must have four explicit mappings: Fundamental/light, Fundamental/dark, Fundamental Floating/light, and Fundamental Floating/dark. Sizing, spacing, and font metrics resolve identically across them. Theme styling may vary colors, corners, border treatment, and shadows. A responsive rule or density option is a separate axis and must be equivalent across the four theme combinations.

Flatten semantic-to-semantic references at generation time or in the authoritative mapping. Composite semantic expressions may use primitive operands, but must not hide semantic dependencies inside gradients, \`color-mix()\`, \`calc()\`, fallbacks, or shadow lists. Group tokens must reference semantic roles only. Preserve meaningful primitive alpha and composition instead of rounding to a nearby opacity stop.

Use the approved semantic ramps and group vocabularies in the shared contract. Group labels are relative to their category; the same label does not imply the same numeric value in every group.

## Migrate names deliberately

Before inserting a step between existing group steps, review the neighboring names and their ordering. Rename neighboring steps when necessary to preserve an understandable scale. Audit every reference, preserve existing rendered values unless a visual change is requested, and migrate source, public exports, documentation, examples, and tests together. Do not leave aliases that bypass a tier or accidentally repurpose an existing name.

Avoid editing generated CSS or JSON as the source of truth. Update the owning typed definitions or manifest, regenerate only when the shared source is stable, and inspect the resulting graph for cycles, missing references, and references to the wrong tier.

## Verify the contract

Check reference direction and all four explicit mappings. Compare computed dimensions, spacing, and font metrics across themes. For colors, verify actual text and control contrast on the surfaces and interaction states where the token is used; test gradient intermediates when text crosses a gradient. For numeric JavaScript consumers, check CSS-resolved values, server defaults, scoped theme inheritance, and measured layout estimates remain consistent.

Run the repository token checks and focused component tests affected by the mapping. Review representative light/dark and Fundamental/Floating examples. Update the token documentation with the real source, role, group, and resolved values. Report any intentional appearance change separately from the reference migration.
`})))()}var m;function h(){return(h=e((()=>{m=`---
name: create-layout
description: "Compose responsive application pages and reusable layout patterns from this repository's components and group tokens. Use for page structure, navigation, panels, and content hierarchy rather than creating a new primitive component by default."
---

# Layout creation

Read [the shared design contract](../references/design-contract.md) before choosing containers, spacing, or theme behavior.

Apply the [product pattern decisions](../references/agentic-contract.md#product-pattern-decisions) before composing pages; use the product's recorded shared patterns and permitted variants.

Use [Constructing a page](../references/page-composition.md) to choose an archetype, scope reading widths and column rules, and plan source, browser and visual acceptance evidence.

## Resolve project decisions

If the project has a \`project-recipes.json\`, validate it and resolve the relevant archetype before composing another page. Use the portable \`project-recipes validate\` and \`project-recipes resolve\` commands, or the equivalent read-only MCP tools. Keep product wrappers consistent with the resolved variants; unsupported host variants must fail explicitly. Do not silently fall back to a different filter behaviour or layout.

Discover the intended behaviour before choosing a component name. Push filtering reserves space beside live results and stacks on narrow screens. A modal SideSheet isolates a task; it is not a substitute for the push shell. Review the resolver's import bindings, host state and acceptance references. See \`docs/PROJECT-RECIPES.md\` for the source format and limits.

## Start with content and existing patterns

Identify the page's primary task, information hierarchy, navigation, state ownership, and responsive constraints. Inspect existing page headers, navigation, filtering, wizard, notification, and AI patterns before introducing another shell. Reuse a pattern when its responsibility matches; do not copy a whole demonstration application to obtain one layout.

Keep normal content groups transparent unless a distinct surface communicates a meaningful relationship. Use existing Card, panel, or overlay components for their actual role rather than wrapping every component in a decorative card. Separate controls, semantic feedback, and structural containers; their boundaries are not interchangeable.

## Compose through group tokens

Use the sidebar category assigned to the layout or pattern in \`tokens/component-categories.json\` for its own spacing, sizing, typography, and style tokens. Nested shared components retain their own category bindings. A layout may position a child through its own tokens, but must not borrow another category to style its own elements or override the child's internal styling. Do not consume primitives or semantic tokens directly in the layout implementation, and do not introduce fixed visual values as inline style shortcuts.

Keep the same sizing, spacing, and font metrics in all four theme combinations. Fundamental Floating may change the approved surface, border, radius, and shadow treatment; it must not silently enlarge controls, fonts, gutters, or content padding. Treat density and responsive adaptation as independent settings that behave consistently in every theme.

Use natural document flow and explicit overflow ownership. Preserve readable text and accessible controls at narrow widths. A wide table may scroll within its own region; avoid making the entire page overflow to compensate for a fixed-width child. Verify sticky and pinned elements against the actual scroll container, including nested surfaces.

## Preserve functional state

Make links and actions navigate or perform their stated operation. Wire filters, selection, sorting, editing, loading, empty, error, and retry states to one source of truth. Changing theme, viewport, or panel visibility must not reset drafts or unrelated selection. Give missing records a useful recovery route.

Keep menus, dialogs, sheets, and composite controls on the shared Base UI-backed components. Apply the theme at the document or appropriate portal root so portaled content follows the same presentation. Verify nested overlay dismissal and focus return; do not replace native behavior with visual-only layers.

Use keyboard-only focus styling with \`:focus-visible\`, while retaining names, landmarks, logical Tab order, and explicit focus handoffs after navigation or removal. Do not hide focused content when a responsive panel changes mode.

## Verify the composition

Exercise the main task at desktop and narrow mobile widths in Fundamental/light, Fundamental/dark, Fundamental Floating/light, and Fundamental Floating/dark. Compare geometry and typography across those modes. Check keyboard navigation, focus visibility, overlay behavior, scrolling, long labels, loading/error/empty content, and state preservation through theme changes.

Add a focused pattern story or application example that demonstrates the real interaction. Keep illustrative data clearly local and do not imply backend capabilities that are absent. Run relevant type, lint, interaction, and accessibility checks; broaden testing only when the composition exposes a new risk. Update the pattern guidance and coordinate generated documentation after source changes are stable.

For additions to the reusable library, follow [authored contract coverage](../references/agentic-contract.md#new-components): bind the real implementation and public entry, preserve component/host ownership, and pass the coverage gate. Keep generated API facts, written requirements and executed evidence distinct.
`})))()}var g;function _(){return(_=e((()=>{g=`---
name: build-ui
description: Build a React interface from an installed Aegis Agentic kit using a locked profile, canonical contracts and existing behavioral primitives.
---

# Build UI

Read [the agentic contract](../references/agentic-contract.md), including its [product pattern decisions](../references/agentic-contract.md#product-pattern-decisions), before composing pages. Locate \`kit.json\`, the selected profile and registry in the installed kit. Run its CLI help rather than guessing command flags.

For page structure, read [Constructing a page](../references/page-composition.md). Select a task-appropriate archetype, reuse the product's chosen patterns, and distinguish enforceable rules from project defaults and visual judgments.

1. Record the task, main action, information hierarchy, states and responsive requirements. Resolve ambiguous behavior through approved defaults or a concise product question.
2. Load the product’s saved project recipes when present; validate and resolve its archetype using \`project-recipes validate\` and \`project-recipes resolve\`. Use \`discover behavior\` for intended interaction, including whether a panel must push results or act as a modal. Respect the resolved host state, import bindings and allowed variants. Search the registry for the task/capabilities. Inspect the matching catalogue entry with \`contracts get\`, then load relevant contracts and examples. Apply its component, host and design responsibilities as described in the shared agentic contract. Use \`reference-api/ai/index.json\` for source-derived API discovery and follow its component links; these facts do not certify runtime behavior. Reuse canonical components, especially complex interactions.
3. Choose and validate a composition specification. Pin profile, registry and compiler versions. The same prompt is not a reproducibility artifact; the accepted spec is.
4. Generate normal application code referencing shared styles, recipes and public implementations. Keep API data, routing and persistence explicit. Load the compiled profile after base Aegis styles and apply its profile attribute to the root so portals inherit it.
5. If a capability is missing, follow \`../extend-design-language/SKILL.md\` before adding a public entry. Local candidates remain experimental.
6. Validate types, tier ownership, states, keyboard/focus and responsive behavior; inspect both modes and both presentations. Keep drafts unchanged through theme switches. Report evidence and limitations.

Do not execute arbitrary model output inside the playground. Do not present fixture output as live AI generation or claim that automated checks establish complete design quality.

Infrastructure consumers also pin their project release and approved profile. Application rendering does not require the project service or an AI provider. Add usage instrumentation only under an explicit project policy: the client is disabled by default, records allowlisted component facts, and flushes only when called. Keep content, URLs, user identity and unrestricted prop values out of events. Check service health before interpreting usage or update recommendations; local file coordination is not hosted multi-user authorization.
`})))()}var v;function y(){return(y=e((()=>{v=`---
name: systemize-repo
description: Systemize an existing UI repository with Aegis by discovering its design language, consolidating compatible components and page patterns, migrating tokens, and fully building missing library capabilities while preserving existing APIs and product behavior.
---

# Systemize a repository

Turn an existing interface into a maintainable design system implementation. Preserve its identity, deliberate interaction choices and public APIs unless the user requests a change. This is an agent-assisted investigation and staged refactor, not a deterministic one-command converter or automatic source repair.

Read the [agentic contract](../references/agentic-contract.md) and [design contract](../references/design-contract.md). Use the [systemization record](references/systemization-record.md) for the project's findings and migration ledger. Read [consolidation decisions](references/consolidation.md) before merging implementations and [accessibility targets](references/accessibility.md) before assessing or changing styling.

## Establish the target

- Identify the user's actual repository, current changes, workspace instructions, framework, build tools, component libraries, routes, styling sources and existing tests. Do not substitute a demo or the Aegis source repository for a missing target path.
- Record the requested scope: audit, pilot, or staged refactor. A request to systemize and refactor authorizes implementation within that scope; do not add approval gates between routine batches. An audit-only request produces findings without rewriting application code.
- Default to preserving the discovered visual language. An Aegis restyle or other redesign is a separate explicit choice. Record \`accessibilityTarget\` as \`normal\`, \`AA\`, or \`AAA\`, defaulting to \`normal\` only if no project target is already established. Normal still requires minimum AA text contrast, keyboard access, visible focus and accessible names; it permits subtler borders without claiming WCAG conformance.
- Record the source revision and local changes, selected Aegis source/kit release, profile and registry. Use an isolated branch or checkout where appropriate; preserve unrelated edits. Reuse existing dependency and folder conventions where they serve the new boundaries.
- Inspect framework compatibility. Aegis's current styled implementations are React/TypeScript web components. Its guidance and token architecture can inform other stacks, but do not introduce React, replace the application framework, or claim an available native adapter without evidence.

## Discover the design language and intent

Inventory routes, page shells, patterns, components, variants and states from source and actual rendered workflows. Include imports and call sites, not only named component files. Inspect theme providers, CSS/custom properties, utilities, inline styles, local styles and existing assets; omit generated/vendor code from ownership counts.

Identify typography, semantic color roles, surfaces, border roles, radius, elevation, spacing, density, icon treatment, motion, responsive behavior and theme coverage. Relate values to their uses. Equal values can have different meanings; repeated values can be accidental. A dominant color or spacing frequency does not establish the designer's intent.

For each candidate family, capture anatomy and interaction alongside appearance: leading/trailing controls, row hit areas, single/multiple selection, immediate/draft commit, cancel/dismiss behavior, reading order, focus, keyboard behavior and state ownership. A check at the end of a modal selection row is a preservation requirement, not a reason to substitute a leading checkbox. Do not infer a widget's semantics from its icon.

Maintain evidence links to files and call sites, plus route/state/theme/viewport screenshots and observations when runnable. Distinguish explicit product decisions, observed implementation, inferred conventions and unresolved conflicts. Mark confidence and sampling boundaries. Inspect multiple representative screens before promoting an observation to a shared rule. When no coherent language exists, retain scoped families and propose a minimal convention rather than inventing a brand.

Capture existing component APIs before changing consumers: prop names/types, defaults, controlled/uncontrolled modes, callbacks and payloads, refs, slots, form semantics, public imports and any supported style hooks. Include forwarded DOM/data/ARIA attributes, focus methods, event ordering/cancellation and native form serialization where applicable. Record real API/network integrations as host obligations. Preserve routes, request shapes, timing, persistence, permissions and business logic through the refactor.

## Plan compatible consolidation

Group candidates by responsibility and behavior, then compare anatomy, API and styling. Use the [decision matrix](references/consolidation.md) to choose reuse, extraction, compatible variants, composition, adapter or separate implementations. Do not equate similar screenshots with interchangeable components.

Reuse the existing repo API as the starting contract. If an Aegis component fits but exposes a different API, preserve the product's API through a thin adapter when possible. Add a shared capability when necessary; do not rewrite working call sites merely to obtain familiar prop names. Record unavoidable breaking changes and their migration before applying them, and resolve unclear behavior with the user while continuing unaffected work.

Separate reusable controls, reusable task patterns, page shells and product-specific orchestration. Introduce props for actual supported differences, with invalid combinations excluded. Avoid a universal component with unrelated Boolean switches. Preserve useful existing folders; establish explicit import boundaries instead of moving the whole repo to a prescribed structure.

Record common page recipes and conventions: headers, actions, search width, filter commit behavior, push panels versus modal tasks, density, reading measures, responsive ordering and overflow ownership. Preserve task-specific exceptions. Use [page composition](../references/page-composition.md) and the installed recipe/policy schemas for supported rules. Keep extra design observations in the decision record, not invented schema fields.

## Tokenize without silently redesigning

Follow [create-token](../create-token/SKILL.md). Trace each design decision through exact Primitive values, Semantic roles and owned Group roles to its consumers. Keep measured geometry, user data and interaction values out of the design-token catalog. Preserve exact values during reference migration except documented accessibility fixes or explicitly requested restyling.

Map only roles that actually match. Do not map every gray to one neutral, round an intentional spacing value to a convenient step, or replace a font because the profile compiler lacks it. Preview supported profile/brand mappings. Unsupported values or roles remain explicit gaps: implement them through an owning source extension or a documented product-local token graph with the same tier rules, not edits to the kit's immutable snapshots, private CSS overrides or fabricated profile fields. Record local group ownership and equivalent checks.

The Aegis target requires four explicit semantic mappings: Fundamental/light, Fundamental/dark, Fundamental Floating/light and Fundamental Floating/dark. Distinguish originally observed modes from newly designed mappings; never claim an absent mode was inferred from source. Keep sizing, spacing and font metrics invariant across that matrix, with density/responsiveness separate. If preserving existing theme geometry conflicts with this rule, record the conflict and resolve the density/model choice before migrating those consumers. Do not silently restyle them or report them compliant.

## Fully build missing capabilities

Search the installed registry, contracts, public exports and actual APIs before declaring a gap. Classify whether the need is an existing-component extension, new reusable component, composed pattern, page recipe or product-only behavior. Build needed capabilities within the requested refactor scope, rather than ending with a wishlist.

Use [extend-design-language](../extend-design-language/SKILL.md), [create-component](../create-component/SKILL.md), [create-layout](../create-layout/SKILL.md), and [create-token](../create-token/SKILL.md) as applicable. Use an editable Aegis Agentic source checkout for library contributions; never modify classic Aegis or generated kit copies. A source checkout is required to finish a library gap. If unavailable, prepare a compatible product-local implementation and report the remaining library work explicitly.

A reusable capability is complete only when its applicable deliverables exist:

- Implementation with existing product API compatibility, exported types, defaults, callbacks and payloads, refs, controlled/uncontrolled behavior, slots and invalid-combination rules. Keep application services and data contracts in their host or adapter.
- Working states and interactions, appropriate Base UI or native semantics, keyboard/focus behavior, accessible naming and feedback, and the selected accessibility target. Keep behavior independent of styling.
- Owned group tokens and all four semantic mappings, responsive and density rules, and documented supported configurations.
- Public package export/import and a real consumer integration. Do not introduce an incompatible canonical API for other consumers; provide an additive adapter or explicit versioned migration where needed.
- Authored contract with stable requirement IDs, component/host/design responsibilities, anatomy, state model, limitations, configuration and acceptance cases. Generated API facts do not replace behavioral guidance.
- Usage and avoidance guidance, composition examples, accessibility instructions, prop/API reference, token ownership and migration notes. Add functional Storybook examples, an args-driven playground and annotated anatomy, including meaningful states and variations.
- Registry/capability discovery and generated documentation coverage, including availability through the existing agent/MCP discovery paths. Verify discovery, not merely the presence of a source file. Add a new MCP tool only if a genuinely new service operation is needed.
- Relevant behavior, API compatibility, token, package-consumer and visual checks with recorded outcomes. Connect applicable acceptance scenarios without pretending missing checks passed. Add repair eligibility only when a trusted finite repair policy and oracle exist.

Register and regenerate through the library's owning scripts, then run its coverage and affected package checks. Continue the consumer integration against a pinned local package or development source as appropriate. Source implementation, consumer verification, shared acceptance and publication are separate statuses. Follow existing owner/release policy for shared promotion or publishing; do not report a local candidate as an available published component.

## Refactor in verifiable slices

Start with a representative vertical slice that exercises real data/state, a repeated pattern and a meaningful interaction. Build the needed shared boundaries, migrate its tokens, preserve its API through direct reuse or adapters, then verify before expanding to the next family. When a staged refactor was requested, continue through the agreed scope without stopping at a successful pilot.

Preserve behavior and styling together. Compare the same content, states, themes and widths against the baseline. Exercise API contracts, keyboard/focus, selected/draft data, validation, overlays, filters, sorting and navigation relevant to each changed slice. Run existing tests first when feasible; distinguish preexisting failures. Add focused regressions for changed boundaries and intentional variants, not tests that merely mirror prop names.

For accessibility, record criterion-level results and evidence under the chosen target. Static checks or a contrast pass do not certify a whole application. Report unavailable browser/assistive-technology evidence and remaining manual review honestly. Do not regenerate screenshots or weaken assertions to hide an unrequested change.

Remove superseded implementations only after checking all consumers, route variants and external export obligations. Update imports, stories, tests and project guidance with each completed batch. Preserve compatibility wrappers while they are still used.

Keep the migration ledger current: baseline and current counts, consolidated families, preserved exceptions, new library capabilities and their completion states, token mappings, API compatibility, accessibility findings, verified routes and remaining work. Add a concise project \`AGENTS.md\` pointer to these decisions and the installed canonical skills so later agents reuse the chosen system. Do not claim repository-wide completion from a sampled pilot.
`})))()}var b;function x(){return(x=e((()=>{b=`# Consolidation decisions

Read when deciding whether similar implementations should become one component, pattern or layout. Prefer the smallest shared boundary that preserves the product's existing design and API contracts.

## Compare before combining

For every proposed family, compare purpose, anatomy, interactions, state ownership, public APIs, semantics, density, responsive behavior and visual roles. Cite source/call sites and rendered evidence. Names and pixel similarity only identify candidates.

| Finding                                                                        | Treatment                                                                                            |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Same responsibility, state model and API; repeated implementation              | Extract once, preserve exports through aliases/adapters as needed, migrate consumers.                |
| Same responsibility and semantics; meaningful appearance or placement variants | Share implementation with explicit supported variants. Preserve existing defaults per consumer.      |
| Shared layout with different domain data or actions                            | Extract a pattern/shell with slots or composition; leave data, permissions and services in the host. |
| Same purpose, different API naming or payload shape                            | Keep the source API through an adapter. Test values and event timing, not just type compatibility.   |
| Similar appearance, different selection/commit/focus model                     | Keep distinct semantic components; share a visual row or container only if useful.                   |
| Same numeric style value, different purpose                                    | Reuse an exact primitive if appropriate; retain separate semantic/group roles.                       |
| Difference with unclear intent or insufficient evidence                        | Record the uncertainty and retain behavior while investigating. Do not merge on frequency alone.     |

## Selection row example

A modal contains single-choice rows with a check at the trailing edge. Another screen uses independent checkboxes at the leading edge with a bulk action. Inspect actual roles, pointer and keyboard handlers, form behavior and state transitions. The trailing check alone does not establish whether the row is a radio, an option or an action.

Preserve the modal's trailing affordance, hit area, selection count, commit timing, cancellation and focus behavior. Preserve the other screen's multi-selection and leading controls. Shared typography or row spacing may belong in a visual primitive, but a generic \`List\` must not collapse these two interaction contracts. If two instances truly share behavior and differ only in indicator placement, a placement variant may be sufficient; keep their existing API through wrappers if required.

An existing input named \`selectedId\` with \`onSelect(id)\` must not silently become \`value\` with \`onChange(event)\`. Public aliases can retain the product's interface while delegating internally. Preserve whether a change is immediate or draft, whether repeated selection emits, and whether Cancel discards or commits. Check form serialization, accessibility and ref targets as part of compatibility.

## Pattern and layout boundaries

Collection pages may share a header, toolbar and results shell while retaining distinct filters, columns and permissions. Settings pages with immediate persistence and forms with Save/Cancel require different commit contracts even if their field layouts match. Push filter panels occupy layout space and preserve access to results; modal panels isolate a task. Do not swap one for the other to make the components look uniform.

Record which decisions are product-wide and which are scoped exceptions. A saved pattern policy can enforce supported import/prop rules, while browser scenarios verify layout and state. Do not pretend a static import check proves correct reading order or panel behavior.

## Aegis fit and missing components

Reuse Aegis directly only when its public API can express the required behavior and anatomy. Prefer a thin compatibility adapter for naming/default differences. A private-selector CSS override, discarded prop or callback translation that changes behavior indicates an unresolved gap.

For a reusable gap, build the full component or extend its owning family and preserve existing consumers. For product-only orchestration, build a local pattern with its own contract and shared controls. Track implementation, API, tokens, guidance, stories, contracts, exports, discovery, verification and release status individually. A successful local render is not a complete library contribution.
`})))()}var S;function C(){return(C=e((()=>{S=`# Project systemization record

Use one durable project record, or the repository's existing equivalent, to keep evidence and decisions accessible to future agents. The following fields are a working outline, not a CLI input schema. Keep source-derived facts, inferred intent, decisions and executed evidence distinct. Do not copy empty sections into a project or invent results to fill them.

## Scope and baseline

- Repository/revision and preexisting local changes; routes, framework and package manager.
- Requested work: audit, pilot or staged refactor; explicitly included/excluded areas.
- Design direction: preserve existing by default, or the user's explicit redesign choice.
- \`accessibilityTarget\`: \`normal\`, \`AA\`, or \`AAA\`; existing stronger requirements retained. Target is separate from achieved status.
- Aegis source/kit/package, registry, compiler and selected profile pins.
- Baseline build/test results and any preexisting failures; runnable environments and unavailable evidence.
- Screenshots/workflow observations identified by route, state, theme, viewport and content fixture. Record what was sampled and what remains uninspected.

## Inventory and design language

For each route, identify its page archetype, shell, repeated patterns, components, state owner and evidence. For each style family, record typography, colors and meanings, surfaces, border roles, spacing, radius, elevation, icon/motion conventions, density, responsive rules and observed themes. Record conflicting families rather than forcing a single answer.

Each decision has a stable ID, scope, description, source/call-site references, rendered evidence if available, origin (\`explicit\`, \`observed\`, \`inferred\`), confidence and disposition (\`preserve\`, \`correct\`, \`investigate\`). An explicit user choice is authoritative; a confident inference is still an inference.

Example decision shape: “Selection indicator is trailing in the plan picker; row activation replaces a single selected ID; modal confirmation commits the draft.” Source and rendered evidence establish which parts actually exist. Do not copy this example as a universal product rule.

## Consolidation and compatibility ledger

| Candidate family and sources | Shared responsibility | Differences to preserve | Proposed boundary/API | Action and evidence | Status |
| ---------------------------- | --------------------- | ----------------------- | --------------------- | ------------------- | ------ |

Use reuse, extraction, compatible variant, composition, adapter, new capability or keep separate as the action. List all affected imports/call sites. Record source props/types/defaults, events/payloads/timing, refs, slots, controlled state, form behavior, host endpoints and persistence. State how each remains compatible, and identify any deliberate break and consumer migration.

## Token migration map

For each changed role record original value/expression, source and consumers; exact primitive; semantic role and four mappings; owned group/category; target references; and whether the rendered result is preserved or intentionally corrected. Classify runtime measurements separately. Record unsupported compiler/profile values and their implementation route. Keep unresolved mappings visible instead of counting them as migrated.

## Missing-capability completion

For every missing capability record its reuse search, intended responsibility and destination (Aegis Agentic source, product-local component, pattern or layout). Link implementation, typed public API, source compatibility, tokens/four mappings, behavioral contract, usage/API guidelines, Storybook playground/anatomy/states, exports, registry/agent/MCP discovery and relevant verification. Each item is complete, pending, or not applicable with a reason. Track source acceptance, consumer integration and publication separately.

## Page conventions and accessibility

Link the project's supported recipe and pattern-policy files. Record shared implementations, permitted variants, header/action/filter decisions, density, overflow and responsive order. Explain exceptions by page/task. Keep descriptive decisions outside executable schemas that do not support them.

For accessibility, record criterion ID, target, route/component/state/theme, method, measured result, status and evidence. Text must meet the Normal baseline even if border gaps remain. For every border gap identify whether the boundary/state cue is essential or decorative, and any alternative identifying cue. Record necessary visual corrections separately from accidental drift.

## Migration batches and results

For each batch link the baseline, implementation and verification, list migrated consumers and retained adapters, and record new/removed implementations. Count component families rather than files when reporting consolidation; give the denominator and scope. Record current literal design values versus unresolved mappings with the same exclusions each time. Do not use a lower component count or fewer literals as proof of correctness.

Close with verified scope, unresolved findings, incomplete full-component deliverables and next work. A pilot must say pilot; a source-only inspection must say source-only. Preserve the decision record and point future work to it from project guidance.
`})))()}var w;function T(){return(T=e((()=>{w=`# Accessibility targets

Use this when selecting the systemization target or assessing a design change. These are workflow targets stored in the project record. They are not a new Aegis profile field, an automatic high-contrast mode, or evidence of conformance merely because a target was selected.

| Target            | Text                                                                                                                                                                             | Borders and other requirements                                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`normal\` (Normal) | Require minimum AA text contrast: 4.5:1, or 3:1 for large text, subject to the criterion's actual exceptions. Correct failing text while preserving the language where possible. | Preserve subtle border treatments. Record insufficient essential-boundary/state contrast as a gap; do not call it AA compliant. Retain keyboard access, visible focus and accessible names. |
| \`AA\`              | Minimum AA text contrast.                                                                                                                                                        | Target all applicable WCAG 2.2 A and AA criteria. Essential component/state cues and meaningful graphics need 3:1 against adjacent colors. Decorative borders may remain subtle.            |
| \`AAA\`             | Enhanced text contrast: 7:1, or 4.5:1 for large text, with the criterion's actual exceptions.                                                                                    | Target applicable A, AA and AAA criteria, including additional focus, target-size and interaction requirements where relevant. AAA does not mean every border must reach 7:1.               |

The text thresholds and exceptions come from [Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [Contrast (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html). Large text is at least 18pt, or 14pt bold. Measure rendered styles and composited backgrounds, including opacity, gradients, overlays, hover, focus and selected states. Do not round a failing ratio up to a threshold.

## Classify the border's role

[Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) concerns information needed to identify controls, states and meaningful graphics. An input boundary may be essential if it is the only cue that makes the input identifiable. A divider between already distinct content groups may be decorative. A control with sufficient identifying text, icon or surface contrast does not automatically need a stronger border.

Record the actual role, adjacent colors and alternative identifying cues before changing a border. Check marks and selection indicators carry state; do not treat them as decoration. Normal permits subtle essential borders but records their failure explicitly. Never describe a sub-threshold essential cue as “slightly AA” or “borderline compliant.” Decorative borders can remain low contrast at every target when they are not needed to convey information.

## Apply the target without erasing design intent

The selected target authorizes necessary contrast and accessibility corrections within the migration scope. Record each intentional difference from the baseline and its criterion. Preserve anatomy, indicator placement, meaning and existing API contracts while changing the owning tokens or semantic implementation. Do not replace a trailing-check selector with leading checkboxes as an accessibility shortcut.

Keep targets independent of light/dark, Fundamental/Floating, density and responsive choices. Verify each supported combination and relevant state. Do not silently override a stronger existing project requirement with Normal, or downgrade a target to make checks pass. Where accessibility and preserved behavior conflict, fix semantics while retaining the intended task; record unresolved product decisions.

## Verification and claims

Build a criterion-level checklist from [WCAG 2.2](https://www.w3.org/TR/WCAG22/), scoped to the full pages and complete workflows being evaluated. Contrast is only one part. Include applicable structure/naming, keyboard, focus, reflow/zoom, text spacing, errors, status announcements, pointer targets, dragging alternatives, timing, motion, authentication and media obligations. Host content and workflows may require checks that a component library cannot supply.

Record \`passed\`, \`failed\`, \`not-run\` or \`not-applicable\`, with the criterion ID, affected scope, method, evidence and reason for any exclusion. Missing browser, screen-reader or other manual evidence remains not-run. Automated scans supplement manual interaction and assistive-technology review; a zero-issue scan is not full conformance.

Report the selected target separately from achieved results, for example “AA target; text checks passed in the inspected states; focus and complete-process review pending.” Only make a conformance claim when the [conformance requirements](https://www.w3.org/TR/WCAG22/#conformance-reqs) are met for the stated scope. Normal intentionally makes no WCAG level claim. A shared component cannot certify an entire consuming application, and AAA may require content/workflow changes beyond the available scope.
`})))()}var E;function D(){return(D=e((()=>{E=`---
name: compose-pattern
description: Select and configure canonical Aegis Agentic patterns while preserving structural and behavioral invariants.
---

# Compose a pattern

Read [the agentic contract](../references/agentic-contract.md) and discover the applicable pattern in the kit registry. Resolve the [product pattern decisions](../references/agentic-contract.md#product-pattern-decisions) before selecting page-specific variants.

For whole pages, use the archetype selection and scoped layout rules in [Constructing a page](../references/page-composition.md). A prose reading measure and a dashboard grid solve different tasks; preserve each region's responsibility.

1. Specify the task, state owner, loading/empty/error handling and content constraints.
2. Separate invariants from allowed variants. For filtering, identify immediate versus explicit application, draft/applied state, clear-all behavior and result synchronization.
3. Select explicit approved defaults. Validate the full specification, including cross-field constraints and pinned registry revision, using the kit CLI.
4. Use the canonical renderer or implementation. Persist the spec alongside the app so other agents reuse the accepted structure.
5. Exercise transitions, not just screenshots: edit, apply, clear, switch density, change mode, narrow viewport and restore. Test controlled input and focus behavior.

A valid variation need not be visually identical. Exact consistency requires the same accepted spec, data/context and versioned implementation. Unsupported behavior is an extension proposal.
`})))()}var O;function le(){return(le=e((()=>{O=`---
name: extend-design-language
description: Propose and reconcile missing components or capabilities using the shared Aegis Agentic registry and contract-first contribution workflow.
---

# Extend the design language

Read \`../references/agentic-contract.md\`. Search approved and proposed registry entries by name, alias and capability. Compare purpose and behavior, not just appearance.

1. Decide reuse, extension or a new responsibility. Record why alternatives do not fit.
2. Write a proposal against the current registry revision: stable candidate ID, purpose, family, anatomy, capabilities, behavior decisions, public API, test expectations and owner.
3. Submit to the shared project registry. A stale revision requires a refresh and reconciliation; do not overwrite another contribution. Draft proposals reduce duplicate work but do not guarantee exclusivity.
4. Implement the candidate locally with existing group roles and approved primitives. Add required behavioral and visual evidence.
5. Compare overlapping proposals. Merge requirements and behavior decisions before code. Conflicting defaults need an explicit resolution or separate patterns. Do not mechanically union APIs.
6. Produce one consolidation plan, combined capability tests, consumer migration and version impact. Owner acceptance promotes the canonical entry. Publish only through the project's release workflow.

Generated code does not automatically become a standard. Similarity scores are review aids, not proof of equivalent functionality. Independent projects converge only through an agreed upstream registry.
`})))()}var k;function A(){return(A=e((()=>{k=`---
name: audit-ui
description: Audit or remediate Aegis Agentic interfaces using reproducible evidence and bounded repair authority.
---

# Audit and remediate

Read [the agentic contract](../references/agentic-contract.md). Include its [product pattern decisions](../references/agentic-contract.md#product-pattern-decisions) when comparing related pages. Record kit/profile/registry versions and the failing scenario before changing anything.

Use [page acceptance guidance](../references/page-composition.md#verify-the-result-at-three-levels) for composition audits. Check long values, readable content widths and responsive column behavior alongside implementation reuse.

1. Check contract validity, token graph/ownership, expected variants, required anatomy and behavior. Inspect both light/dark and both presentations at relevant widths.
2. Classify findings as derived drift, implementation defect, missing capability, design-language change or uncertain diagnosis. Distinguish observed failure from a fixture scenario.
3. Run the kit maintenance scan. Automatic repair may restore only known derived files when the approved profile and compiler lock still match. Keep the returned evidence/backup.
4. For behavior, API, dependency, profile or contract changes, prepare an isolated proposal with a reproduction and fix. Do not change tests, baselines, contracts or thresholds just to obtain a pass.
5. Validate the combined result against current shared source and existing regressions. Stop at the attempt budget or if scope expands. Report human review needed for semantic or visual judgments.

Do not run indefinite repair loops, install unattended schedules or publish updates without the project's explicit maintenance/release policy. Consumer updates remain pinned and deliberate.

In a clean library source checkout, \`npm run repair -- scan\` runs the trusted MetricCard/Sparkline containment audit without AI. \`npm run repair -- run --provider codex\` explicitly enables a bounded source proposal after a reproduced defect. It isolates two allowlisted CSS files, preserves tests/contracts/tokens, records attempts durably, reruns the same browser matrix plus required regressions, and stops at a reviewable local commit. This is separate from automatic derived-output repair and is not available inside the portable consumer kit. Inspect its saved report and patch; a passing finite audit does not replace visual/semantic review. \`publish --id RUN_ID\` is a separate draft-PR action under project authorization. Never reset a failed incident or weaken its policy to get a pass. See the source repository's \`docs/SOURCE-REPAIR.md\` for operations and limits.

For an infrastructure project, inspect \`infrastructure/cli.mjs status --project <directory>\` and \`inventory\` first. Separate finite configuration estimates from verified configurations; zero verification is not full coverage. \`plan\` writes reviewable proposals; remote AI requires explicit project opt-in, server credentials and a model. \`reconcile\` restores derived artifacts only after pinned-source integrity passes. Preserve failed state, audit history and backups. Never delete a lock until its owning process is confirmed stopped. Consult the infrastructure API contract for request shapes; do not send component content, user identifiers or arbitrary prop values as usage evidence.
`})))()}var j;function M(){return(M=e((()=>{j="# Shared design contract\n\nThis contract applies to component, token, and layout work in this repository. It defines the approved architecture. Inspect the current source before implementation; an existing shortcut is a migration target, not permission to extend that shortcut.\n\n## Three token tiers\n\n```text\nPrimitive values → Semantic roles → Group roles → Components and layouts\n```\n\nThere are three token tiers. Components and layouts are consumers, not a fourth token tier.\n\n- **Primitive:** exact context-free colors, dimensions, font metrics, percentages, and other design values. No semantic or group references.\n- **Semantic:** shared design meaning with explicit theme mappings. Primitive references only.\n- **Group:** descriptive roles owned by the Storybook sidebar category. Semantic references only.\n- **Consumer:** component or layout styling and its numeric design defaults. Group references only.\n\nResolve the category from `tokens/component-categories.json` using the longest matching source prefix. A component's own CSS, inline styles, and numeric design defaults use only that category's namespace. Every component under **Components/Triggers**, including Button, Link, DropdownMenu, and ContextMenu, uses `--group-trigger-*` for its own properties. Do not create a per-component top-level group or borrow another category's tokens because their values happen to match.\n\nA genuinely nested shared component retains its own category. A Card uses Surface tokens for the Card's properties; a real Button rendered inside it still uses Trigger tokens for the Button's properties. The parent may lay out the child using its own category tokens, but must not restyle the child's implementation or reclassify borrowed tokens as nesting. Shared helpers and registry imports do not establish a nested-component relationship. Document owned and nested bindings separately, and keep actual ownership violations visible until the source is corrected.\n\nThe same rules apply inside fallbacks and composite expressions. A semantic gradient or shadow must resolve directly through primitive operands, not another semantic token. A group alias cannot bypass semantics. State-dependent local bindings may select the appropriate group token; they are implementation bindings, not a new public token tier.\n\nRuntime values derived from actual data, measurement, or interaction are not design tokens. Examples include a dragged column's measured width, a progress value, or a calculated popover position. Fixed defaults, clamps, thresholds, and visual dimensions still follow the three tiers. Document the difference and keep numeric JavaScript defaults synchronized with their CSS source.\n\n## Four explicit semantic mappings\n\nEvery semantic token defines Fundamental/light, Fundamental/dark, Fundamental Floating/light, and Fundamental Floating/dark explicitly, including when several mappings are identical.\n\nSizing, spacing, font families, font sizes, line heights, weights, and tracking remain identical across all four mappings. Colors, radii, border treatment, and shadows may change with the selected theme or mode. Existing mode-dependent sizing or spacing must be reconciled during migration rather than silently retained as an exception.\n\nResponsive breakpoints, density choices, and user resizing are separate axes. Their rules must behave consistently across the four combinations. Keep theme changes from altering content, selection, drafts, or interaction state.\n\n## Naming scales\n\nSemantic dimension, spacing, and radius ramps use this order:\n\n`xxxs`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `xxxl`, `xxxxl`.\n\nGroup names describe relative treatment within a category:\n\n- **Spacing:** `flush`, `hairline`, `tight`, `snug`, `compact`, `regular`, `comfortable`, `roomy`, `spacious`, `expansive`.\n- **Radius:** `square`, `slight`, `subtle`, `soft`, `rounded`, `bold`, `strong`, `pronounced`, `dramatic`, `full`.\n- **Sizing:** `tiny`, `small`, `compact`, `regular`, `comfortable`, `roomy`, `large`, `extra-large`, `huge`, `vast`.\n\nSizing names are the working vocabulary; inspect the approved token manifest before adding a new family. A label's numeric meaning is local to its group. For example, the Trigger category's button `snug` spacing may be 4px while the Surface category's container `snug` spacing is 16px. This illustrates relative naming, not a universal mapping to copy into every group.\n\nWhen a new step belongs between existing group steps, review the ordering and neighboring names. Renaming may be appropriate. Audit and migrate all consumers, exports, documentation, and tests while preserving existing values unless a visual change is explicitly requested.\n\n## Headless behavior and focus\n\nUse Base UI for applicable composite interaction behavior and keep its headless entry independent of styles. Styled components consume group tokens and expose clear public props. Do not add theme-specific visual decisions to the behavior layer.\n\nKeyboard focus uses `:focus-visible` and input-modality tracking where text controls retain native focus-visible after a pointer click. Pointer focus alone must not add a focus ring or outline. A quiet active border may remain. Keep native focus and a visible keyboard indicator; preserve forced-colors support, focus return, and navigation handoffs. Do not remove hidden primitive focus guards as a styling workaround.\n\n## Source and verification\n\nThe authoritative token manifest is `tokens/design-tokens.json`; its generated stylesheet is `src/styles/design-tokens.css`. Change definitions through the manifest and owning scripts, not generated CSS or compatibility declarations. Inspect `src/lib/component-design-tokens.ts` for numeric runtime access and keep its defaults synchronized with the canonical definitions. Component implementations and exports live in `src/components` and `src/package`; composed patterns live in `src/patterns`. The Directory and source-backed component documentation identify existing families and APIs.\n\nUse the relevant scripts in `package.json`, including token, headless-boundary, type, lint, unit, interaction, documentation, and package checks. Verify actual keyboard behavior and computed theme values in addition to automated accessibility checks. Coordinate generated documentation with concurrent work so one final generation reflects a stable source snapshot. Do not edit unrelated local review prototypes or infer publishing authorization from a request to create a component.\n"})))()}var N;function P(){return(P=e((()=>{N=`# Agentic kit contract

The project profile, registry, composition contract and kit version are authoritative inputs. Source prose explains choices; executable contracts constrain them. Generated API metadata does not certify behavior or accessibility.

## Discovery and ownership

Start with the kit manifest and registry. Search by responsibility, capability and aliases. Prefer the canonical implementation when it fits; extend its public contract only when the responsibility remains coherent. Keep product data/routing in the consuming application. A new semantic role, incompatible behavior, or unsupported combination is an explicit proposal, not an undocumented CSS override.

Read the selected entry in the contract catalogue before composing it. API metadata describes available props; an authored contract describes responsibilities and boundaries. A family with only API metadata has no authored behavioral guarantee. Inspect its implementation and relevant examples before relying on behavior that the API does not establish.

Source-backed contracts use stable requirement IDs and three kinds: \`component\` identifies implementation behavior to preserve, \`host\` identifies work the consuming application must provide, and \`design\` identifies a composition or styling constraint. Resolve host obligations in the product's shared pattern or state owner; do not assume a component handles routing, remote data, request cancellation or persistence unless its contract says so. Read its limitations and controlled-state rules before selecting it. Keep relevant requirement IDs in acceptance cases so two contributors can compare the same responsibility when reviewing an extension.

Cited source paths and hashes record which source bytes were catalogued. They do not establish that a requirement passed a test, remains semantically correct after a source change, or received owner approval. Linked checks describe their finite scope; reported evidence is separate. Reassess affected requirements when an implementation changes, retain IDs for unchanged responsibilities, and version changed behavior with its migration guidance.

## Product pattern decisions

Before composing or extending pages, read the product's existing pattern policy or composition specification. If none exists, record the relevant decisions alongside the product source before building repeated page structures. The user's direction governs these choices; this is a shared implementation record, not a new approval step.

For the same purpose within one product, reuse the chosen shared implementation for page headers, filter bars, table toolbars, forms and other repeated compositions. Discover a suitable canonical implementation first; use a product-local wrapper or composition when product-specific defaults are needed. Record the implementation, responsibilities, permitted variants and constraints so another agent can make the same choice. Include relevant action placement, filtering behavior, density and responsive rules rather than letting each page invent them independently.

Preserve differences that serve distinct tasks. Document an exception's scope and reason, or express it as an allowed variant of the shared pattern. A metric overview need not have the same controls as a searchable collection. Product choices do not prescribe another product's dimensions, appearance or structure, and creating a local pattern does not promote it into the global registry.

Verify comparable pages together against the recorded decisions, including their visual hierarchy and interactions at relevant widths and modes. Use the product's available pattern checks and browser scenarios; report gaps in that evidence. Correct unintended drift in the implementation instead of rewriting the policy to excuse it. When the user changes the intended pattern, update the shared implementation, decision record and affected checks together.

The portable kit's [product pattern policy](pattern-policy.md) defines explicit page membership, shared imports, JSX cardinality, prop constraints and scoped exceptions. Use its \`patterns check\` command for those finite source checks. Record descriptive design decisions separately from executable constraints and keep browser evidence for appearance and behavior; a passing source audit does not prove runtime consistency. Policy version 2 rejects legacy policies until they are explicitly migrated.

## Token and component foundation

Read [the shared design contract](design-contract.md) for the authoritative Primitive → Semantic → Group rules, four explicit theme/mode mappings, category ownership and relative naming scales. It is the same source used by the repository's component, token and layout skills.

The portable kit includes \`tokens/design-tokens.json\` and \`tokens/component-categories.json\` as reference snapshots. Its compiler is bundled; editing a reference snapshot does not rebuild that compiler. New token roles or category registrations require a source-checkout proposal and a new kit version. In a consumer project, retain the declared owning group for new local components and run equivalent ownership checks before upstream acceptance.

## New components

Specify responsibility, anatomy, properties, invalid combinations, state model, keyboard/focus behavior, names, group ownership and acceptance cases before implementation. Use native elements when sufficient and Base UI for applicable composite behavior. Preserve its controlled/uncontrolled semantics and accessibility APIs. Focus styling is keyboard-visible. Do not imitate a composite widget using visual-only markup.

Find the nearest approved family and examples. Use deterministic shared recipes; never copy resolved profile colors into component CSS. A new composition can be valid without adding a semantic role. Tests must include required states and relevant combinations, not merely confirm the implementation's current output.

In the source library, every generated API family must have an explicit authored contract binding. Register the canonical implementation, export and public import; cite actual sources for behavior requirements and distinguish component responsibilities from host obligations. Document real limits instead of implying that an API signature or generated story proves behavior. Public UI aliases require a deliberate mapping; support APIs and assets are classified separately. Follow [the coverage model](../../docs/CONTRACTS.md), regenerate derived documentation, and run \`coverage:check\` after the catalogue is current. This gate enforces ownership, not acceptance evidence. A local consumer composition follows its project policy and does not become a canonical library family automatically.

## Evidence and acceptance

Keep exact profile, registry and compiler versions with each result. Report automated checks, manual review and unverified cases separately. New candidates are experimental until promoted into a canonical registry release. Shared acceptance needs design/behavior review; local creation is allowed without publishing it.

## Maintenance

Only deterministic derived-output drift from unchanged approved inputs qualifies for automatic local repair. Behavioral changes, profile source changes, dependency updates, public API changes, contract changes and releases require owner review. A repair must not alter its test oracle, baseline or thresholds to pass. Keep a backup/evidence record and stop after the bounded attempt fails. Updates to consumer projects are explicit and versioned.

The library source checkout also has a bounded source-proposal worker. Its initial policy covers MetricCard/Sparkline CSS containment only: reproduce with trusted browser checks, request a structured AI proposal, validate exact paths/source hashes, apply in an isolated checkout, and rerun acceptance plus regressions. Successful output is a reviewable commit, not an approved release. Attempt state survives restarts and repeated incidents are deduplicated. The portable kit does not include this worker; use the source checkout's \`docs/SOURCE-REPAIR.md\` and preserve consumer pins. More repair policies need explicit scope and acceptance evidence.
`})))()}var F;function I(){return(I=e((()=>{F=`# Constructing a page

Read this when choosing page structure or reviewing a composed screen. The [design contract](design-contract.md) owns tokens and behavior boundaries; the [product policy](pattern-policy.md) records choices shared within one product. Neither replaces the user's task.

## Make decisions at the appropriate scope

| Layer               | Authority                          | Example                                                                       |
| ------------------- | ---------------------------------- | ----------------------------------------------------------------------------- |
| Design language     | Approved profile and token graph   | Typography, surfaces, semantic color, spacing and elevation                   |
| Page archetype      | Registered recipe and public API   | Collection, detail, settings or dashboard structure                           |
| Product conventions | Versioned project pattern policy   | Chosen header, filter arrangement, search width, action placement and density |
| Page content        | Task and data                      | Columns, labels, contextual actions, empty/error explanations                 |
| Evidence            | Checks plus explicit design review | Import/prop compliance, rendered geometry, workflows and appropriateness      |

Resolve decisions in that order. Existing product conventions remain the default for the same purpose. A new product may choose different conventions. An intentional exception names its page, affected rule and reason; it is not a blanket permission to bypass the system.

## Select an archetype from the task

The experimental \`page-layout\` contract provides four initial recipes. Discover its current import path and version in the installed registry before use.

- **Collection:** Find, compare and act on records. Use a shared header, optional shared filters, full-width results, and collection-owned display/pagination controls. Tables own horizontal scrolling. Empty results distinguish an empty collection from active filters that match nothing.
- **Detail:** Understand or work on one entity. Put primary information first. Add one supporting region only when its content helps the primary task; preserve that reading order when columns stack. Use \`ReadingColumn\` for prose inside the main region while allowing tables and editors their own width.
- **Settings:** Change configuration deliberately. Use one readable main column, grouped fields, descriptions and explicit validation. Record whether changes save immediately or require Save/Cancel, how unsaved navigation behaves, and how confirmation works for consequential actions.
- **Dashboard:** Scan a summary and decide what to investigate. Use an adaptive content grid with a declared maximum column count and minimum useful item width. Metrics need a name, value, period/context and an appropriate destination when interactive. A trend must remain inside its card beside a long value or move to its own row.

These are initial reusable patterns, not an exhaustive classification of every possible interface. A workspace editor, wizard or split-view inbox may need a different recipe. Follow capability discovery and the extension workflow when the interaction model does not fit.

## State hard rules, defaults and judgments separately

**Hard rules** have an observable failure: reuse the selected header; keep the page title unique; use the declared filter application behavior; preserve drafts through a mode change; keep page content inside its available width; give overlays names and restore focus.

**Defaults** establish a starting composition: a detail page uses primary content plus at most one supporting column; a dashboard starts with a bounded adaptive grid; settings use a comfortable reading measure. Projects choose supported variants, then reuse those decisions consistently. Hardcoding two columns for every page would prevent legitimate dashboard and collection layouts.

**Design judgments** explain why the structure serves the task: the primary action is appropriate, related information belongs together, the secondary panel earns its space, and visual hierarchy reflects importance. Static validation cannot establish these judgments.

## Reading width and responsive structure

\`ReadingColumn\` exposes compact, comfortable and wide measures (55ch, 65ch and 75ch in the initial recipe). These are project-selectable defaults, not universal optimal values. \`ch\` uses the font's zero-glyph advance as a width unit; it is not a limit on text length or a guarantee of exactly that many characters per line. Review actual typography and languages used by the product.

Constrain paragraphs and forms intentionally. Do not apply a prose measure to an entire page containing data grids, charts or editors. Prefer the named measure over local CSS widths so related screens share the decision.

Column count is a maximum, not a requirement to squeeze content into columns. \`ContentGrid\` combines the selected cap with a minimum item width and available container space. Detail supporting content follows the main content when space is insufficient. Mode and presentation do not change reading measure, spacing, or column rules. Responsive adaptation and density are independent choices.

## Compose shared implementations

Use the registered \`PageLayout\`, \`PageHeader\`, \`ReadingColumn\`, \`ContentGrid\`, and applicable product wrappers. The page layout owns its outer structure; nested controls keep their own token ownership. Avoid redefining shared pattern internals in page CSS.

Before implementing repeated pages, record:

1. The task, archetype and primary action.
2. Shared implementations and selected variants, including density and reading measure.
3. Header/actions/filter placement and data-state ownership.
4. Loading, empty, error, success and permission behavior that the application actually supports.
5. Responsive reading order, overflow ownership and overlay/focus behavior.
6. How the decisions will be checked, and which judgments remain for visual review.

A local demo should use real local interactions and say where data is illustrative. Do not invent a backend, permission system or persistence guarantee to fill this record.

## Verify the result at three levels

- **Source checks:** The portable pattern checker can verify declared imports, literal choices, constrained props, local forbidden tags and the supported literal route inventory. Its report states what it cannot infer. Types catch incompatible recipe props.
- **Browser checks:** Compare related pages in light/dark and both presentations, at wide and narrow containers. Measure header/search alignment, reading width, column count and overflow. Exercise long content, filters, empty states, keyboard navigation, overlays and state preservation. Keep data tables wide inside their own scroll regions.
- **Visual and task review:** Inspect grouping, hierarchy, action priority, reading order and useful density. Screenshots are evidence until a reviewer explicitly accepts them as regression baselines.

A failure should improve the shared implementation or the missing acceptance rule. Do not relax a policy or baseline simply to make an unintended variation pass. When the user changes the intended behavior, update the chosen recipe, project record, consumers and checks together.
`})))()}var L;function R(){return(R=e((()=>{L=`# Portable product pattern policies

Use this reference when creating or checking a product's repeated page structures. It describes the finite executable part of the [product pattern decisions](agentic-contract.md#product-pattern-decisions). The product's intended experience remains authoritative; a passing source check does not establish visual or behavioral correctness.

These conventions belong to the named product and declared pages. Record its repeated page construction choices—header hierarchy, action slots, filter placement, density and responsive behavior—before adding comparable pages. A product's chosen values do not become universal design-system defaults. Combine executable constraints with descriptive guidance and browser evidence for decisions that source syntax cannot establish.

## Create and run a policy

Save a project-relative JSON policy using \`schemas/product-pattern-policy.schema.json\` from the kit. Version 2 makes page membership and executable constraints explicit. Version 1 Forma policies must be migrated; they are not silently interpreted with new semantics.

Run from any working directory:

\`\`\`sh
node /path/to/agent-kit/bin/aegis.mjs patterns check pattern-policy.json --project /path/to/product
\`\`\`

The policy path is relative to the project root, or an absolute path inside it. Source paths are always relative to the project root. \`scope\` is a normalized directory within the project, or \`.\` for the whole project. Policy and source paths cannot escape the project or scope through traversal or symlinks. This command reads source and emits JSON; it does not execute the application's code, rewrite files, or change the policy.

\`\`\`json
{
  "schemaVersion": 2,
  "product": "inventory",
  "revision": 1,
  "scope": "src",
  "pages": [{ "id": "items", "source": "src/items.tsx", "patterns": ["pageHeader", "grid"] }],
  "patterns": {
    "pageHeader": {
      "module": "@dimitriszoitas/aegis-agentic/patterns/page-header",
      "export": "PageHeader",
      "cardinality": { "min": 1, "max": 1 },
      "forbiddenLocalTags": ["h1"],
      "invariants": ["Shared header owns the page title and action placement"],
      "allowedVariations": ["Title, description and task-specific actions"]
    },
    "grid": {
      "module": "@dimitriszoitas/aegis-agentic/data-grid",
      "export": "DataGrid",
      "cardinality": { "min": 1, "max": 1 },
      "requiredProps": ["density"],
      "forbiddenProps": ["renderToolbar"],
      "invariants": ["Workspace density is shared; retain default display controls"]
    }
  },
  "exceptions": []
}
\`\`\`

Use the installed package's actual module paths. A product-local wrapper may use \`module: "./patterns"\`, with its public named export. Add \`source: "src/patterns.tsx"\` to fingerprint that local implementation in the report. Source metadata does not prove that a module specifier resolves to that file; normal build/type checks establish module resolution.

Each page explicitly selects its relevant patterns. Set finite \`cardinality.min\` and \`cardinality.max\` per pattern. Zero is permitted for optional patterns. Descriptive-only patterns can record future or manually checked guidance, but cannot be referenced in a page's executable \`patterns\` array without a module, export and cardinality.

An optional \`routeInventory\` declares \`{ "source": "src/app.tsx", "variable": "pages", "idProperty": "id" }\`. The checker compares a top-level literal route array against the policy's page IDs and order. It accepts \`as const\` and \`satisfies\`; dynamic inventories need an application-specific route check. Without an inventory, the checker cannot discover omitted routes.

The inventory must be a local \`const\`. Direct reassignments, indexed/nested writes, mutating or unknown method calls, exports and escapes of the array binding through aliases or arguments fail. Common read methods such as \`map\` and \`find\` remain supported. This is a bounded local source check, not whole-program immutability analysis: callbacks, returned entry aliases and external runtime behavior still need application-specific tests.

## What is enforced

- Public named imports, including aliases, and namespace imports identify the chosen implementation. A shadowed local variable or same-named component from another module does not count.
- Cardinality counts JSX occurrences in a declared page source. Conditional renders, loops and helper components require browser evidence to establish the actual rendered count.
- \`requiredProps\` checks explicit prop presence, without evaluating its value. \`forbiddenProps\` checks explicitly supplied props. Spreads produce \`spread-props\` because their effective configuration is unknown.
- Optional \`propValues\` fixes product-specific values, for example \`{ "density": "default", "enableSelection": false, "pagination": true, "pageSize": 10 }\`. Each value must be a JSON primitive: string, finite number, boolean or null. The prop must be supplied explicitly, and a direct literal of the same type must match exactly. Boolean shorthand such as \`pagination\` means \`true\`. A missing value, duplicate attribute, spread or dynamic expression produces an unresolved \`prop-value:<name>\` finding. The checker does not execute expressions or infer component defaults. Encoded or multiline JSX attribute strings require an explicit JavaScript string literal to avoid ambiguous entity/whitespace handling.
- \`forbiddenLocalTags\` rejects specified intrinsic lowercase JSX tags anywhere in that page source; keep the rule scoped to the appropriate pages.
- Missing sources, malformed JSX, invalid policies and unknown rule properties fail the check. Explicitly declared local implementation sources are fingerprinted and parsed, but their behavior is not inferred.

Local identifier aliases, re-export resolution, \`createElement\` calls and dynamically constructed components do not establish an accepted pattern occurrence. Prefer direct public JSX bindings when practical. Use separate focused checks for a deliberate unsupported composition instead of reporting static uncertainty as verified behavior.

## Exceptions and evidence

An exception must identify exactly one page, pattern and rule and include a reason, for example:

\`\`\`json
{
  "page": "items",
  "pattern": "pageHeader",
  "rule": "forbidden-tag:h1",
  "reason": "This page embeds a separately titled printable document."
}
\`\`\`

Specific rules are \`missing-import\`, \`cardinality\`, \`spread-props\`, \`required-prop:<name>\`, \`forbidden-prop:<name>\`, \`prop-value:<name>\` and \`forbidden-tag:<tag>\`. Matched exceptions remain visible in the report with their findings. Unused exceptions fail so they do not silently become permanent waivers. Parse, filesystem, schema and route-coverage failures cannot be waived. A reason is an explicit design record, not authenticated owner approval. If a product intentionally reads a value from runtime state, scope its \`prop-value\` exception to that page and provide focused runtime evidence.

Reports include checker version, policy revision and canonical SHA-256, source hashes, findings and acknowledged exceptions. Keep them alongside the relevant kit/package lock, profile and browser evidence. A changed policy or source produces a different hash; this lets consumers identify stale evidence but is not an automatic approval mechanism.

Pair source checks with browser scenarios for shared header geometry, responsive filtering, keyboard interactions, loading/empty/error states and both modes. Review and approve screenshot baselines separately. Never broaden policy allowances or update visual baselines merely to hide an unintended regression.
`})))()}function z(e){return e.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/,``).replace(/^\s*# [^\n]+\n/,``)}function B({href:e,children:t}){let n={"design-contract.md":K.id,"agentic-contract.md":q.id,"page-composition.md":J.id,"pattern-policy.md":Y.id,"consolidation.md":X.id,"systemization-record.md":Z.id,"accessibility.md":Q.id},[r,i]=e?.split(`#`)??[],a=r?.match(/^(?:\.\.?\/)*(?:skills\/)?([\w-]+)\/SKILL\.md$/)?.[1],o=Object.entries($).find(([,e])=>e.name===a);if(o){let e=new URL(V().location.href);return e.searchParams.get(`path`)?.startsWith(`/docs/agentic-skills-`)||e.searchParams.set(`path`,`/docs/agentic-skills-component-creation--docs`),e.searchParams.set(`agenticSkill`,o[0]),e.hash=i??``,(0,G.jsx)(`a`,{href:e.href,target:`_top`,children:t})}let s=r?.split(`/`).at(-1),c=s&&Object.hasOwn(n,s)?`#${n[s]}${i?`-${i}`:``}`:e;return(0,G.jsx)(ce,{href:c,children:t})}function ue({skillId:e}){let t=$[e],n=`skills/${t.name}/SKILL.md`,r=`Use $${t.name} from ${n}. ${t.request}`,a=`${[t.source,...t.contracts.map(e=>e.source)].map(e=>e.trim()).join(`

`)}\n`;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`header`,{className:`agentic-skill-header agentic-skill-selected-header`,children:[(0,G.jsx)(`h2`,{children:t.title}),(0,G.jsx)(`p`,{children:t.description})]}),(0,G.jsxs)(`dl`,{className:`agentic-skill-summary`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`dt`,{children:`Use for`}),(0,G.jsx)(`dd`,{children:t.useFor})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`dt`,{children:`Expected result`}),(0,G.jsx)(`dd`,{children:t.result})]})]}),(0,G.jsxs)(`section`,{className:`agentic-skill-invocation`,"aria-labelledby":`use-this-skill`,children:[(0,G.jsxs)(`div`,{className:`agentic-skill-copy-row`,children:[(0,G.jsx)(`h2`,{id:`use-this-skill`,children:`Use this skill`}),(0,G.jsxs)(`div`,{className:`agentic-skill-copy-action`,children:[(0,G.jsx)(`span`,{children:`Copy instructions`}),(0,G.jsx)(ae,{text:a,"aria-label":`Copy ${t.title} instructions`})]})]}),(0,G.jsxs)(`p`,{children:[`Open `,(0,G.jsx)(`code`,{children:n}),` in the repository, or copy the instructions together with the applicable shared contracts below. Skill discovery depends on the agent environment; an explicit file path also works when repository skills are not listed automatically.`]}),(0,G.jsx)(`pre`,{children:(0,G.jsx)(`code`,{children:r})})]}),(0,G.jsx)(`div`,{className:`agentic-skill-prose`,children:(0,G.jsx)(i,{remarkPlugins:[l],skipHtml:!0,components:{a:({href:e,children:t})=>(0,G.jsx)(B,{href:e,children:t})},children:z(t.source)})}),t.contracts.map(e=>(0,G.jsxs)(`section`,{className:`agentic-skill-contract agentic-skill-prose`,id:e.id,"aria-labelledby":`${e.id}-title`,children:[(0,G.jsx)(`h2`,{id:`${e.id}-title`,children:e.title}),(0,G.jsxs)(`p`,{className:`agentic-skill-source-path`,children:[`Source: `,(0,G.jsx)(`code`,{children:e.path})]}),(0,G.jsx)(i,{remarkPlugins:[l],skipHtml:!0,components:{h2:({children:t})=>(0,G.jsx)(`h3`,{id:`${e.id}-${String(t).toLowerCase().replace(/[^\w\s-]/g,``).replace(/\s+/g,`-`)}`,children:t}),a:({href:e,children:t})=>(0,G.jsx)(B,{href:e,children:t})},children:z(e.source)})]},e.id))]})}function V(){try{if(window.top?.location.origin===window.location.origin)return window.top}catch{}return window}function H(e){let t=new URLSearchParams(V().location.search).get(`agenticSkill`);return t&&Object.hasOwn($,t)?t:e}function U({skillId:e=`component`}){let[t,n]=(0,W.useState)(()=>H(e));return(0,W.useEffect)(()=>{let t=V(),r=()=>n(H(e));return r(),t.addEventListener(`popstate`,r),()=>t.removeEventListener(`popstate`,r)},[e]),(0,G.jsxs)(`article`,{className:`agentic-skill-page`,children:[(0,G.jsxs)(`header`,{className:`agentic-skill-header`,children:[(0,G.jsx)(`h1`,{children:`Agentic Skills`}),(0,G.jsx)(`p`,{children:`Repository instructions for creating components, tokens, and layouts, plus building, systemizing, composing, extending, and auditing interfaces with the portable Agentic kit. Each tab renders the source skill and its applicable shared contracts, together with a copy action.`})]}),(0,G.jsxs)(ne,{value:t,onValueChange:e=>{if(typeof e!=`string`||!Object.hasOwn($,e))return;n(e);let t=V(),r=new URL(t.location.href);r.searchParams.set(`agenticSkill`,e),t.history.replaceState(t.history.state,``,r)},children:[(0,G.jsx)(re,{className:`agentic-skill-navigation`,"aria-label":`Agentic skills`,activateOnFocus:!0,children:Object.entries($).map(([e,t])=>(0,G.jsx)(a,{className:`agentic-skill-tab`,value:e,children:t.title},e))}),Object.keys($).map(e=>(0,G.jsx)(te,{value:e,className:`agentic-skill-panel`,children:e===t&&(0,G.jsx)(ue,{skillId:e})},e))]})]})}var W,G,K,q,J,Y,X,Z,Q,$;function de(){return(de=e((()=>{W=t(),o(),c(),ee(),s(),r(),se(),ie(),oe(),d(),p(),h(),_(),y(),x(),C(),T(),D(),le(),A(),M(),P(),I(),R(),G=n(),K={id:`shared-design-contract`,title:`Shared design contract`,path:`skills/references/design-contract.md`,source:j},q={id:`shared-agentic-contract`,title:`Shared Agentic contract`,path:`skills/references/agentic-contract.md`,source:N},J={id:`page-composition`,title:`Constructing a page`,path:`skills/references/page-composition.md`,source:F},Y={id:`project-pattern-policy`,title:`Project pattern policy`,path:`skills/references/pattern-policy.md`,source:L},X={id:`systemization-consolidation`,title:`Consolidation decisions`,path:`skills/systemize-repo/references/consolidation.md`,source:b},Z={id:`systemization-record`,title:`Systemization record`,path:`skills/systemize-repo/references/systemization-record.md`,source:S},Q={id:`systemization-accessibility`,title:`Accessibility target`,path:`skills/systemize-repo/references/accessibility.md`,source:w},$={component:{name:`create-component`,title:`Component Creation`,description:`Build or extend a reusable component with the right behavior, public API, tokens, and documentation.`,useFor:`A reusable component or an existing component that needs a new capability.`,result:`A typed component, focused stories, real anatomy, and verified interactions.`,request:`Build or extend a reusable component for the requested interaction.`,source:u,contracts:[K,q,Y]},token:{name:`create-token`,title:`Token Creation`,description:`Add or migrate design decisions through Primitive, Semantic, and Group tokens without hiding changes in the reference chain.`,useFor:`A new design role, an exact value that is missing, or a token naming migration.`,result:`A complete reference chain, four explicit mappings, and verified consumers.`,request:`Add or refine the requested token and migrate every affected reference.`,source:f,contracts:[K]},layout:{name:`create-layout`,title:`Layout Creation`,description:`Compose application pages and reusable patterns from existing components while preserving hierarchy, state, and responsive behavior.`,useFor:`A page, workspace, or composed pattern with connected navigation and state.`,result:`A responsive composition with useful actions and consistent theme geometry.`,request:`Compose the requested responsive application layout from the existing system.`,source:m,contracts:[K,q,J,Y]},"build-ui":{name:`build-ui`,title:`Build UI`,description:`Build a React interface from an installed Agentic kit using a locked profile, canonical contracts, and existing behavior primitives.`,useFor:`An application interface that should reuse a project’s approved design language.`,result:`Application code with pinned inputs, validated composition, and explicit verification limits.`,request:`Build the requested interface using the installed kit and its canonical components.`,source:g,contracts:[q,K,J,Y]},"systemize-repo":{name:`systemize-repo`,title:`Systemize Repo`,description:`Organize an existing product into shared components, patterns, layouts, and tokens while preserving its design language and interaction decisions.`,useFor:`An existing UI repository with repeated implementations, scattered styling, or undocumented design decisions.`,result:`An evidence-backed design inventory and staged refactor with compatible reuse, preserved APIs and variants, and verified behavior.`,request:`Systemize this repository. Infer and preserve its current design language, consolidate compatible implementations, and migrate tokens in verified slices.`,source:v,contracts:[X,Z,Q,q,K,J,Y]},"compose-pattern":{name:`compose-pattern`,title:`Compose Pattern`,description:`Select and configure a canonical pattern while preserving its structural and behavioral invariants.`,useFor:`A supported pattern with explicit variants, state ownership, and a reusable specification.`,result:`A validated, versioned specification backed by the canonical implementation.`,request:`Configure the requested pattern using approved variants and validate its specification.`,source:E,contracts:[q,K,J,Y]},"extend-design-language":{name:`extend-design-language`,title:`Extend Design Language`,description:`Propose missing capabilities and reconcile overlapping contributions through the shared registry.`,useFor:`A component or capability that approved entries do not cover.`,result:`An experimental proposal, supporting evidence, and a consolidation plan for owner review.`,request:`Discover existing capabilities, then propose and reconcile the requested extension.`,source:O,contracts:[q,K,Y]},"audit-ui":{name:`audit-ui`,title:`Audit UI`,description:`Audit an interface using reproducible evidence and distinguish bounded derived-file repair from changes requiring review.`,useFor:`Observed drift, behavioral defects, missing capabilities, or uncertain interface findings.`,result:`Verified findings, permitted repair evidence, and explicit review needs for other changes.`,request:`Audit the requested interface and remediate only within the kit’s repair authority.`,source:k,contracts:[q,K,J,Y]}},U.__docgenInfo={description:`The old section routes still initialize their corresponding tab.`,methods:[],displayName:`AgenticSkillPage`,props:{skillId:{required:!1,tsType:{name:`union`,raw:`keyof typeof skills`,elements:[{name:`literal`,value:`component`},{name:`literal`,value:`token`},{name:`literal`,value:`layout`},{name:`literal`,value:`'build-ui'`},{name:`literal`,value:`'systemize-repo'`},{name:`literal`,value:`'compose-pattern'`},{name:`literal`,value:`'extend-design-language'`},{name:`literal`,value:`'audit-ui'`}]},description:``,defaultValue:{value:`'component'`,computed:!1}}}}})))()}export{de as n,U as t};