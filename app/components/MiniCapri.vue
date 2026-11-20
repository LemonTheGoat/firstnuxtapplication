<script setup lang="ts">
const route = useRoute()

const open = ref(false)
const minimized = ref(false)
const index = ref(0)

const messages = [
  'Yo, choom. Capri here, fresh off the wire.',
  "Welcome to Liam's crib. It's preem, no gonk stuff.",
  'Wanna see the deets? Jack into the profile.',
  'Built on Nuxt, Tailwind & pure chrome.',
  'Powerlifting keeps me nova. No flatliners. 🏋️',
  'Swipe left or right to delta between pages.',
  "Need netrunning help? Linux's my mainline. 🐧",
]

const isHome = computed(() => route.path === '/')
const navLabel = computed(() => (isHome.value ? 'View profile →' : '← Back home'))

let timer: number | undefined

function clearAutoOpen() {
  if (timer) {
    window.clearTimeout(timer)
    timer = undefined
  }
}

function next() {
  index.value = (index.value + 1) % messages.length
}

function toggleOpen() {
  clearAutoOpen()
  open.value = !open.value
}

function minimize() {
  clearAutoOpen()
  minimized.value = true
  open.value = false
}

function restore() {
  minimized.value = false
}

function goNav() {
  navigateTo(isHome.value ? '/profile' : '/')
  open.value = false
}

onMounted(() => {
  timer = window.setTimeout(() => {
    open.value = true
  }, 1500)
})

onBeforeUnmount(() => {
  clearAutoOpen()
})
</script>

<template>
  <div class="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
    <Transition name="bubble">
      <div v-if="open && !minimized" class="capri-bubble">
        <button
          type="button"
          class="capri-bubble-close"
          aria-label="Dismiss message"
          @click="open = false"
        >
          ×
        </button>

        <p class="capri-tag">Capri<span class="capri-tag-accent">//</span></p>
        <p class="capri-message" aria-live="polite">{{ messages[index] }}</p>

        <div class="capri-actions">
          <button type="button" class="capri-btn capri-btn-ghost" @click="next">Next</button>
          <button type="button" class="capri-btn capri-btn-solid" @click="goNav">
            {{ navLabel }}
          </button>
        </div>
      </div>
    </Transition>

    <div v-if="!minimized" class="capri-float-wrap relative">
      <button
        type="button"
        class="capri-badge"
        :aria-label="open ? 'Hide Capri message' : 'Talk to Capri'"
        :title="open ? 'Hide Capri' : 'Talk to Capri'"
        @click="toggleOpen"
      >
        <img src="/capri.jpg" alt="Mini Capri mascot" width="64" height="64" />
      </button>
      <button
        type="button"
        class="capri-minimize"
        aria-label="Minimize Capri"
        title="Minimize Capri"
        @click="minimize"
      >
        ×
      </button>
    </div>

    <button
      v-else
      type="button"
      class="capri-pill"
      aria-label="Restore Capri"
      @click="restore"
    >
      <img src="/capri.jpg" alt="" width="16" height="16" class="capri-pill-avatar" />
      <span>Capri</span>
    </button>
  </div>
</template>

<style scoped>
.capri-float-wrap {
  animation: capri-float 3.2s ease-in-out infinite;
}

.capri-bubble {
  position: relative;
  width: 16rem;
  max-width: calc(100vw - 2.5rem);
  padding: 0.875rem 1rem;
  border-radius: 0.875rem;
  background: #121218;
  border: 1px solid rgba(255, 30, 110, 0.45);
  box-shadow:
    0 0 0 1px rgba(6, 182, 212, 0.12),
    0 0 24px rgba(255, 30, 110, 0.25),
    0 18px 40px rgba(0, 0, 0, 0.55);
  transform-origin: bottom right;
}

.capri-bubble::after {
  content: '';
  position: absolute;
  right: 20px;
  bottom: -6px;
  width: 12px;
  height: 12px;
  background: #121218;
  border-right: 1px solid rgba(255, 30, 110, 0.45);
  border-bottom: 1px solid rgba(255, 30, 110, 0.45);
  transform: rotate(45deg);
}

.capri-bubble-close {
  position: absolute;
  top: 0.3rem;
  right: 0.4rem;
  line-height: 1;
  padding: 0.15rem 0.4rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.55);
  border-radius: 0.375rem;
  transition:
    color 150ms ease,
    background 150ms ease;
}

.capri-bubble-close:hover {
  color: #ffffff;
  background: rgba(255, 30, 110, 0.18);
}

.capri-tag {
  margin: 0 0 0.25rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ff1e6e;
}

.capri-tag-accent {
  color: #06b6d4;
}

.capri-message {
  margin: 0 0 0.75rem;
  font-size: 0.85rem;
  line-height: 1.45;
  color: #e5e7eb;
}

.capri-actions {
  display: flex;
  gap: 0.5rem;
}

.capri-btn {
  flex: 1;
  padding: 0.4rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition:
    transform 150ms ease,
    box-shadow 150ms ease,
    background 150ms ease,
    border-color 150ms ease,
    color 150ms ease;
}

.capri-btn:active {
  transform: scale(0.97);
}

.capri-btn-ghost {
  color: #67e8f9;
  background: transparent;
  border: 1px solid rgba(6, 182, 212, 0.5);
}

.capri-btn-ghost:hover {
  color: #a5f3fc;
  border-color: #06b6d4;
  box-shadow: 0 0 12px rgba(6, 182, 212, 0.35);
}

.capri-btn-solid {
  color: #ffffff;
  background: #ff1e6e;
  border: 1px solid #ff1e6e;
}

.capri-btn-solid:hover {
  background: #e01163;
  box-shadow: 0 0 14px rgba(255, 30, 110, 0.5);
}

.capri-badge {
  position: relative;
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  padding: 3px;
  border-radius: 9999px;
  cursor: pointer;
  overflow: hidden;
  background: linear-gradient(135deg, #ff1e6e, #10b981, #06b6d4);
  box-shadow:
    0 0 0 2px rgba(255, 30, 110, 0.15),
    0 0 22px rgba(255, 30, 110, 0.4);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.capri-badge:hover {
  transform: scale(1.08);
  box-shadow:
    0 0 0 2px rgba(255, 30, 110, 0.35),
    0 0 34px rgba(255, 30, 110, 0.65);
}

.capri-badge:active {
  transform: scale(0.96);
}

.capri-badge img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  object-fit: cover;
}

.capri-badge::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: linear-gradient(
    115deg,
    transparent 30%,
    rgba(255, 255, 255, 0.18) 50%,
    transparent 70%
  );
  transform: translateX(-120%);
  animation: capri-glint 3.4s ease-in-out infinite;
  pointer-events: none;
}

.capri-minimize {
  position: absolute;
  top: -0.4rem;
  right: -0.4rem;
  width: 1.25rem;
  height: 1.25rem;
  line-height: 1;
  font-size: 0.85rem;
  font-weight: 700;
  color: #ffffff;
  background: #18181b;
  border: 1px solid rgba(255, 30, 110, 0.5);
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  transition:
    background 150ms ease,
    transform 150ms ease;
}

.capri-minimize:hover {
  background: #ff1e6e;
  transform: scale(1.1);
}

.capri-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.7rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #e5e7eb;
  background: #121218;
  border: 1px solid rgba(255, 30, 110, 0.45);
  box-shadow: 0 0 16px rgba(255, 30, 110, 0.25);
  cursor: pointer;
  transition:
    transform 150ms ease,
    box-shadow 150ms ease;
}

.capri-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 22px rgba(255, 30, 110, 0.5);
}

.capri-pill-avatar {
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  object-fit: cover;
}

.bubble-enter-active {
  transition:
    opacity 200ms ease-out,
    transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.bubble-leave-active {
  transition:
    opacity 150ms ease-in,
    transform 150ms ease-in;
}

.bubble-enter-from,
.bubble-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

@keyframes capri-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes capri-glint {
  0%,
  55% {
    transform: translateX(-120%);
  }
  85%,
  100% {
    transform: translateX(120%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .capri-float-wrap,
  .capri-badge::after {
    animation: none;
  }
  .bubble-enter-active,
  .bubble-leave-active {
    transition-duration: 1ms;
  }
}
</style>
