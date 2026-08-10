#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Main agent must always update the `test_result.md` file before calling the testing agent
#    - Add implementation details to the status_history
#    - Set `needs_retesting` to true for tasks that need testing
#    - Update the `test_plan` section to guide testing priorities
#    - Add a message to `agent_communication` explaining what you've done
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well 
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================



#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
#====================================================================================================

## user_problem_statement: Add a PayPal.me donation button to tnhc.dev footer to let users support development. Then continue with backlog: P1a Email notification on signup (Resend) + admin view of signups; P1b Live app directory for the 80+ Nexus apps; P2 Federation explainer animation; P2 Blog/changelog of AI-built releases.

## frontend:
  - task: "PayPal donation button in footer"
    implemented: true
    working: "NA"
    file: "frontend/src/components/site/Donate.jsx"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Created Donate.jsx component (acid-fill hover pattern matching Header 'Request Access' button) wired to https://www.paypal.me/tnhc with target=_blank rel=noopener. Embedded in Waitlist.jsx footer copyright bar between © TNHC line and 'Kernel online' status. data-testid='donate-paypal-button'. Added DONATE testId registry in constants/testIds/home.js. Responsive — stacks on mobile, inline on sm+."
  - task: "Live app directory (Nexus app stack)"
    implemented: true
    working: true
    file: "frontend/src/pages/Apps.jsx"
    stuck_count: 0
    priority: "medium"
    needs_retesting: true
    status_history:
        -working: true
        -agent: "main"
        -comment: "New /apps route with 100-module registry (src/data/apps.js) across 10 categories. Search + category pills (with counts) + status filter (live/beta/planned). Tree-shakeable explicit icon map (src/lib/appIcons.js) — bundle dropped from ~1.2MB to 228kB gzip. Production build succeeds; dev server serves / and /apps (200). Header gains 'Apps' link; page includes its own donate link. data-testids registered in constants/testIds/home.js. Verified all 92 icon exports exist in installed @phosphor-icons/react."

## backend:
  - task: "Resend email notification on waitlist signup + admin list signups endpoint"
    implemented: true
    working: "NA"
    file: "backend/server.py"
    stuck_count: 0
    priority: "medium"
    needs_retesting: true
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Implemented. Added resend==2.10.2 to requirements. POST /api/waitlist now fires _send_signup_notification via loop.run_in_executor (non-blocking, errors only logged) using RESEND_API_KEY/ADMIN_EMAIL/NOTIFY_FROM env — all optional, guarded so missing config never breaks signup. GET /api/admin/signups lists waitlist entries (paginated limit/offset, sorted created_at desc) protected by ADMIN_API_TOKEN bearer. Requires MONGO_URL/DB_NAME/CORS_ORIGINS as before. py_compile passes. Needs runtime test with real env + token."

## metadata:
  created_by: "main_agent"
  version: "1.0"
  test_sequence: 1
  run_ui: false

## test_plan:
  current_focus:
    - "PayPal donation button in footer"
    - "Live app directory (Nexus app stack)"
    - "Resend email notification on waitlist signup"
    - "Admin list signups endpoint"
  stuck_tasks: []
  test_all: false
  test_priority: "high_first"

## agent_communication:
    -agent: "main"
    -message: "PayPal.me/tnhc donation button added to footer (Donate.jsx, acid-fill hover). P1a done: Resend admin notification on signup (fire-and-forget) + GET /api/admin/signups (bearer ADMIN_API_TOKEN, paginated). P1b done: /apps route with 100-app registry, search + category/status filters, tree-shaken icons (bundle 1.2MB→228kB). Production build + dev-server smoke test on / and /apps pass. Needs visual + runtime verification (backend needs real MONGO_URL and env). P2 (federation map + blog) deferred per user."