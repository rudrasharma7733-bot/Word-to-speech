/**
 * VOICE AI STUDIO - ElevenLabs Text-to-Speech Engine
 * Complete interactive client application
 */

// ==========================================================================
// 1. Curated ElevenLabs Voice Catalog
// ==========================================================================
const DEFAULT_VOICES = [
  {
    voice_id: "21m00Tcm4TlvDq8ikWAM",
    name: "Rachel",
    category: "Premade",
    gender: "female",
    accent: "American",
    description: "Calm, clear American female voice — ideal for audiobooks, meditations, and narration.",
    tags: ["American", "Calm", "Narration"],
    preview_url: "https://storage.googleapis.com/eleven-public-prod/premade/voices/21m00Tcm4TlvDq8ikWAM/df6788f9-1955-4780-80e4-7f1165158652.mp3"
  },
  {
    voice_id: "pNInz6obpgDQGcFmaJgB",
    name: "Adam",
    category: "Premade",
    gender: "male",
    accent: "American",
    description: "Deep, resonant, commanding American male voice — perfect for narration and commercials.",
    tags: ["American", "Deep", "Commercial"],
    preview_url: "https://storage.googleapis.com/eleven-public-prod/premade/voices/pNInz6obpgDQGcFmaJgB/6f9a9768-4509-4458-b12e-13cb8b2a1a09.mp3"
  },
  {
    voice_id: "ErXwobaYiN019PkySvjV",
    name: "Antoni",
    category: "Premade",
    gender: "male",
    accent: "American",
    description: "Well-rounded, friendly, engaging male voice — fantastic for storytelling and explainers.",
    tags: ["American", "Friendly", "Storytelling"],
    preview_url: "https://storage.googleapis.com/eleven-public-prod/premade/voices/ErXwobaYiN019PkySvjV/01e91238-d698-4c6e-9c71-0ae6b58605c4.mp3"
  },
  {
    voice_id: "EXAVITQu4vr4xnSDxMaL",
    name: "Bella",
    category: "Premade",
    gender: "female",
    accent: "American",
    description: "Soft, expressive, emotional young female voice — great for fantasy, video games, and creative stories.",
    tags: ["American", "Expressive", "Character"],
    preview_url: "https://storage.googleapis.com/eleven-public-prod/premade/voices/EXAVITQu4vr4xnSDxMaL/0a5da096-03f6-4a48-a0b5-78e90635da17.mp3"
  },
  {
    voice_id: "VR6AewLTigWG4xSOukaG",
    name: "Arnold",
    category: "Premade",
    gender: "male",
    accent: "American",
    description: "Crisp, authoritative, articulate male voice — ideal for news, technical docs, and documentaries.",
    tags: ["American", "Authoritative", "News"],
    preview_url: "https://storage.googleapis.com/eleven-public-prod/premade/voices/VR6AewLTigWG4xSOukaG/02ef2fa3-5c8e-491a-8c85-eb9a27909c2a.mp3"
  },
  {
    voice_id: "TxGEqnHWrfWFTfGW9XjX",
    name: "Josh",
    category: "Premade",
    gender: "male",
    accent: "American",
    description: "Warm, natural, conversational young male voice — perfect for casual podcasts and lifestyle.",
    tags: ["American", "Warm", "Conversational"],
    preview_url: "https://storage.googleapis.com/eleven-public-prod/premade/voices/TxGEqnHWrfWFTfGW9XjX/4d94b05b-b9f1-419b-ab00-84335c03c58b.mp3"
  },
  {
    voice_id: "MF3mGyEYCl7XYWbV9V6O",
    name: "Elli",
    category: "Premade",
    gender: "female",
    accent: "American",
    description: "Gentle, soothing, emotionally nuanced female voice — ideal for children's stories and relaxation.",
    tags: ["American", "Gentle", "Narration"],
    preview_url: "https://storage.googleapis.com/eleven-public-prod/premade/voices/MF3mGyEYCl7XYWbV9V6O/d86c7582-019d-4e0e-9df2-9b2f6ef858a7.mp3"
  },
  {
    voice_id: "yoZ06aGknGIASjF7o0jQ",
    name: "Sam",
    category: "Premade",
    gender: "male",
    accent: "American",
    description: "Dynamic, raspy, character-rich male voice — great for gaming dialogues and movie voiceovers.",
    tags: ["American", "Dynamic", "Character"],
    preview_url: "https://storage.googleapis.com/eleven-public-prod/premade/voices/yoZ06aGknGIASjF7o0jQ/119a9768-4509-4458-b12e-13cb8b2a1a09.mp3"
  },
  {
    voice_id: "AZnzlk1XvdvUeBnXmlld",
    name: "Domi",
    category: "Premade",
    gender: "female",
    accent: "American",
    description: "Strong, energetic, confident female voice — built for commercials, promos, and high-energy spots.",
    tags: ["American", "Energetic", "Commercial"],
    preview_url: "https://storage.googleapis.com/eleven-public-prod/premade/voices/AZnzlk1XvdvUeBnXmlld/50b864c2-a14e-41d4-8395-5cbef47cf5c4.mp3"
  },
  {
    voice_id: "ThT5KcBeYPX3keUQqHPh",
    name: "Dorothy",
    category: "Premade",
    gender: "female",
    accent: "British",
    description: "Pleasant, clear, refined British female voice — well suited for audiobooks and educational material.",
    tags: ["British", "Pleasant", "Narration"],
    preview_url: "https://storage.googleapis.com/eleven-public-prod/premade/voices/ThT5KcBeYPX3keUQqHPh/981a5e16-1634-406e-82fb-a708a3d5e2e8.mp3"
  },
  {
    voice_id: "CYw3kZ02Hs0563khs1Fj",
    name: "Dave",
    category: "Premade",
    gender: "male",
    accent: "British",
    description: "Conversational, articulate British male voice — perfect for video essays, documentaries, and tech talks.",
    tags: ["British", "Conversational", "Narration"],
    preview_url: "https://storage.googleapis.com/eleven-public-prod/premade/voices/CYw3kZ02Hs0563khs1Fj/4d94b05b-b9f1-419b-ab00-84335c03c58b.mp3"
  },
  {
    voice_id: "g5CIjZEefAph4nQFvHAz",
    name: "Ethan",
    category: "Premade",
    gender: "male",
    accent: "American",
    description: "Soft, whispery, serene male voice — ideal for guided sleep meditations and calm mindfulness.",
    tags: ["American", "Whispery", "Narration"],
    preview_url: "https://storage.googleapis.com/eleven-public-prod/premade/voices/g5CIjZEefAph4nQFvHAz/01e91238-d698-4c6e-9c71-0ae6b58605c4.mp3"
  }
];

// Sample prompt templates
const SAMPLE_PROMPTS = {
  story: "The ancient clock tower echoed across the misty valley, its iron bell tolling twelve deliberate times. Elena pulled her wool coat tighter against the midnight chill, knowing that the secret archives beneath the abbey would only unlock tonight.",
  podcast: "Welcome back, innovators and creators! You're tuned into Voice AI Studio. Today, we're exploring neural audio synthesis, cutting-edge machine learning, and how artificial voices are redefining human storytelling.",
  trailer: "In a future where digital consciousness transcends the stars, one forgotten transmission will awaken an ancient guardian. Prepare yourself for the ultimate frontier.",
  scifi: "Diagnostic check complete. Orbital stabilization thrusters at ninety-nine percent efficiency. Welcome aboard the Prometheus station, Commander. What are your departure coordinates?",
  meditation: "Close your eyes and let your shoulders drop. Take a long, deep breath in through your nose... hold it gently for a moment... and slowly let it drift away, leaving pure tranquility behind."
};

// Default pre-configured ElevenLabs API key
const DEFAULT_API_KEY = "09f612c7b3470b9daf2b6f1dbc922f37f259d977deb551b04512d69c3c3ef851";

// ==========================================================================
// 2. Application State
// ==========================================================================
const state = {
  apiKey: localStorage.getItem("elevenlabs_api_key") || DEFAULT_API_KEY,
  voices: [...DEFAULT_VOICES],
  selectedVoiceId: "21m00Tcm4TlvDq8ikWAM", // Rachel default
  activeFilter: "all",
  searchQuery: "",
  isGenerating: false,
  isPlaying: false,
  currentAudioUrl: null,
  currentBlob: null,
  currentFormatExt: "mp3",
  currentTitle: "VoiceAI_Speech",
  playbackSpeedIndex: 1, // [0.75, 1.0, 1.25, 1.5, 2.0]
  speeds: [0.75, 1.0, 1.25, 1.5, 2.0],
  volume: 1.0,
  pitchSemitones: 0,
  isMuted: false,
  history: []
};

// ==========================================================================
// 3. Audio & Visualizer Setup (Web Audio API)
// ==========================================================================
const audioElement = new Audio();
audioElement.preload = "auto";
audioElement.crossOrigin = "anonymous";

let audioCtx = null;
let analyser = null;
let audioSourceNode = null;
let visualizerAnimationId = null;

const canvas = document.getElementById("waveformCanvas");
const canvasCtx = canvas.getContext("2d");

function initAudioContext() {
  if (audioCtx) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.8;

    audioSourceNode = audioCtx.createMediaElementSource(audioElement);
    audioSourceNode.connect(analyser);
    analyser.connect(audioCtx.destination);
  } catch (err) {
    console.warn("Web Audio API initialization warning:", err);
  }
}

// Convert raw 16-bit PCM buffer to playable WAV Blob
function pcmToWav(pcmBuffer, sampleRate = 44100, numChannels = 1) {
  const byteRate = sampleRate * numChannels * 2;
  const blockAlign = numChannels * 2;
  const dataSize = pcmBuffer.byteLength;
  const wavBuffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(wavBuffer);

  function writeString(offset, str) {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  }

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM format
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true); // 16-bit
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  new Uint8Array(wavBuffer, 44).set(new Uint8Array(pcmBuffer));
  return new Blob([wavBuffer], { type: 'audio/wav' });
}

// Draw dynamic visualizer loop
function startVisualizer() {
  cancelAnimationFrame(visualizerAnimationId);

  const bufferLength = analyser ? analyser.frequencyBinCount : 64;
  const dataArray = new Uint8Array(bufferLength);

  let idlePhase = 0;

  function renderFrame() {
    visualizerAnimationId = requestAnimationFrame(renderFrame);

    const width = canvas.width;
    const height = canvas.height;

    canvasCtx.clearRect(0, 0, width, height);

    if (state.isPlaying && analyser) {
      analyser.getByteFrequencyData(dataArray);

      const barCount = 48;
      const barSpacing = 4;
      const totalSpacing = (barCount - 1) * barSpacing;
      const barWidth = (width - totalSpacing) / barCount;

      for (let i = 0; i < barCount; i++) {
        const dataIndex = Math.floor((i / barCount) * (bufferLength * 0.75));
        const rawVal = dataArray[dataIndex] || 0;
        const normalized = rawVal / 255;
        const barHeight = Math.max(4, normalized * (height - 20));

        const x = i * (barWidth + barSpacing);
        const y = (height - barHeight) / 2;

        const gradient = canvasCtx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, "#06b6d4"); // Cyan top
        gradient.addColorStop(0.5, "#8b5cf6"); // Purple mid
        gradient.addColorStop(1, "#ec4899"); // Pink bottom

        canvasCtx.fillStyle = gradient;
        canvasCtx.beginPath();
        canvasCtx.roundRect(x, y, barWidth, barHeight, [3]);
        canvasCtx.fill();

        if (normalized > 0.4) {
          canvasCtx.fillStyle = "#ffffff";
          canvasCtx.beginPath();
          canvasCtx.arc(x + barWidth / 2, y + 2, barWidth * 0.4, 0, Math.PI * 2);
          canvasCtx.fill();
        }
      }
    } else {
      idlePhase += 0.04;
      const waves = 3;

      for (let w = 0; w < waves; w++) {
        canvasCtx.beginPath();
        const amplitude = 12 + w * 6;
        const freq = 0.015 - w * 0.002;
        const offset = idlePhase + w * 1.5;

        canvasCtx.strokeStyle = w === 0 ? "rgba(139, 92, 246, 0.45)" : (w === 1 ? "rgba(6, 182, 212, 0.3)" : "rgba(236, 72, 153, 0.2)");
        canvasCtx.lineWidth = 2 + w;

        for (let x = 0; x < width; x += 4) {
          const y = height / 2 + Math.sin(x * freq + offset) * amplitude * Math.cos(idlePhase * 0.5);
          if (x === 0) {
            canvasCtx.moveTo(x, y);
          } else {
            canvasCtx.lineTo(x, y);
          }
        }
        canvasCtx.stroke();
      }
    }
  }

  renderFrame();
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  canvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

// ==========================================================================
// 4. UI Elements Cache
// ==========================================================================
const elements = {
  // Navigation & API Key
  apiKeyModalBtn: document.getElementById("apiKeyModalBtn"),
  apiKeyBtnLabel: document.getElementById("apiKeyBtnLabel"),
  apiKeyStatusDot: document.getElementById("apiKeyStatusDot"),
  subscriptionBadge: document.getElementById("subscriptionBadge"),
  subTierText: document.getElementById("subTierText"),
  subQuotaText: document.getElementById("subQuotaText"),
  apiKeyModal: document.getElementById("apiKeyModal"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  cancelModalBtn: document.getElementById("cancelModalBtn"),
  apiKeyInput: document.getElementById("apiKeyInput"),
  toggleKeyVisibilityBtn: document.getElementById("toggleKeyVisibilityBtn"),
  eyeShowIcon: document.getElementById("eyeShowIcon"),
  eyeHideIcon: document.getElementById("eyeHideIcon"),
  saveApiKeyBtn: document.getElementById("saveApiKeyBtn"),
  saveKeyBtnText: document.getElementById("saveKeyBtnText"),
  saveKeySpinner: document.getElementById("saveKeySpinner"),
  clearApiKeyBtn: document.getElementById("clearApiKeyBtn"),
  keyVerificationResult: document.getElementById("keyVerificationResult"),

  // Text Area
  speechTextInput: document.getElementById("speechTextInput"),
  charCount: document.getElementById("charCount"),
  maxCharCount: document.getElementById("maxCharCount"),
  clearTextBtn: document.getElementById("clearTextBtn"),
  pasteTextBtn: document.getElementById("pasteTextBtn"),
  insertPauseBtn: document.getElementById("insertPauseBtn"),
  insertLongPauseBtn: document.getElementById("insertLongPauseBtn"),
  promptChips: document.querySelectorAll(".prompt-chip"),

  // Settings
  settingsToggle: document.getElementById("settingsToggle"),
  settingsContent: document.getElementById("settingsContent"),
  activeModelBadge: document.getElementById("activeModelBadge"),
  modelSelect: document.getElementById("modelSelect"),
  outputFormatSelect: document.getElementById("outputFormatSelect"),
  stabilitySlider: document.getElementById("stabilitySlider"),
  stabilityVal: document.getElementById("stabilityVal"),
  similaritySlider: document.getElementById("similaritySlider"),
  similarityVal: document.getElementById("similarityVal"),
  styleSlider: document.getElementById("styleSlider"),
  styleVal: document.getElementById("styleVal"),
  speechSpeedSlider: document.getElementById("speechSpeedSlider"),
  speechSpeedVal: document.getElementById("speechSpeedVal"),
  speakerBoostToggle: document.getElementById("speakerBoostToggle"),

  // Generate Action
  generateBtn: document.getElementById("generateBtn"),
  generateBtnText: document.getElementById("generateBtnText"),
  generateSpinner: document.getElementById("generateSpinner"),
  generationStatusText: document.getElementById("generationStatusText"),

  // Voice Picker
  activeVoiceBanner: document.getElementById("activeVoiceBanner"),
  activeVoiceAvatar: document.getElementById("activeVoiceAvatar"),
  activeVoiceName: document.getElementById("activeVoiceName"),
  activeVoiceCategory: document.getElementById("activeVoiceCategory"),
  activeVoiceDesc: document.getElementById("activeVoiceDesc"),
  activeVoiceTags: document.getElementById("activeVoiceTags"),
  voiceSearchInput: document.getElementById("voiceSearchInput"),
  filterPills: document.querySelectorAll(".filter-pill"),
  voiceGridContainer: document.getElementById("voiceGridContainer"),
  syncVoicesBtn: document.getElementById("syncVoicesBtn"),

  // Audio Player
  audioStatusBadge: document.getElementById("audioStatusBadge"),
  visualizerPlaceholder: document.getElementById("visualizerPlaceholder"),
  currentTimeDisplay: document.getElementById("currentTimeDisplay"),
  totalDurationDisplay: document.getElementById("totalDurationDisplay"),
  scrubTrack: document.getElementById("scrubTrack"),
  scrubFill: document.getElementById("scrubFill"),
  scrubHandle: document.getElementById("scrubHandle"),
  playPauseBtn: document.getElementById("playPauseBtn"),
  playIcon: document.getElementById("playIcon"),
  pauseIcon: document.getElementById("pauseIcon"),
  skipBackBtn: document.getElementById("skipBackBtn"),
  skipForwardBtn: document.getElementById("skipForwardBtn"),
  playbackSpeedBtn: document.getElementById("playbackSpeedBtn"),
  muteToggleBtn: document.getElementById("muteToggleBtn"),
  volHighIcon: document.getElementById("volHighIcon"),
  volMuteIcon: document.getElementById("volMuteIcon"),
  volumeSlider: document.getElementById("volumeSlider"),
  downloadAudioBtn: document.getElementById("downloadAudioBtn"),
  downloadBtnText: document.getElementById("downloadBtnText"),

  // Pitch Shift & DSP Controls
  pitchSlider: document.getElementById("pitchSlider"),
  pitchVal: document.getElementById("pitchVal"),
  resetPitchBtn: document.getElementById("resetPitchBtn"),
  activeFormatTag: document.getElementById("activeFormatTag"),

  // History
  historyCountPill: document.getElementById("historyCountPill"),
  historyList: document.getElementById("historyList"),
  historyEmptyState: document.getElementById("historyEmptyState"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),

  // Toast
  toastContainer: document.getElementById("toastContainer")
};

// ==========================================================================
// 5. Toast Notifications
// ==========================================================================
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  const icon = type === "success" ? "✓" : (type === "error" ? "✕" : "ℹ");
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;

  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px) scale(0.95)";
    setTimeout(() => toast.remove(), 250);
  }, 4000);
}

// ==========================================================================
// 6. API Key & Subscription Management
// ==========================================================================
function updateApiKeyUIState() {
  if (state.apiKey && state.apiKey.trim().length > 5) {
    elements.apiKeyBtnLabel.textContent = "API Key Active";
    elements.apiKeyStatusDot.className = "status-indicator-dot ready";
    elements.apiKeyInput.value = state.apiKey;
    fetchSubscriptionQuota(state.apiKey);
  } else {
    elements.apiKeyBtnLabel.textContent = "Connect API Key";
    elements.apiKeyStatusDot.className = "status-indicator-dot warning";
    elements.subscriptionBadge.className = "subscription-pill";
    elements.subTierText.textContent = "No API Key";
    elements.subQuotaText.textContent = "(Demo Mode)";
  }
}

async function fetchSubscriptionQuota(key) {
  try {
    const res = await fetch("https://api.elevenlabs.io/v1/user/subscription", {
      headers: { "xi-api-key": key }
    });

    if (res.ok) {
      const data = await res.json();
      const used = (data.character_count || 0).toLocaleString();
      const limit = (data.character_limit || 0).toLocaleString();
      const tier = (data.tier || "Active").toUpperCase();

      elements.subscriptionBadge.className = "subscription-pill active";
      elements.subTierText.textContent = tier;
      elements.subQuotaText.textContent = `${used} / ${limit} chars`;
      return { success: true, data };
    } else {
      const err = await res.json().catch(() => ({}));
      elements.subscriptionBadge.className = "subscription-pill";
      elements.subTierText.textContent = "Key Setup Needed";
      elements.subQuotaText.textContent = "(Secret sk_ required)";
      let message = err.detail?.message || "Invalid API key";
      if (message.includes("API key ID used as API key") || message.includes("sk_")) {
        message = "⚠️ Notice: This is the API Key ID rather than the Secret API Key. ElevenLabs secret keys begin with 'sk_' and are 51 characters long. Please create or copy your 'sk_' key from elevenlabs.io/app/settings/api-keys.";
      }
      return { success: false, error: message };
    }
  } catch (err) {
    return { success: false, error: "Network error checking quota: " + err.message };
  }
}

async function fetchAccountVoices(key) {
  if (!key) return;
  try {
    elements.syncVoicesBtn.classList.add("spinning");
    const res = await fetch("https://api.elevenlabs.io/v1/voices", {
      headers: { "xi-api-key": key }
    });

    if (res.ok) {
      const data = await res.json();
      if (data.voices && data.voices.length > 0) {
        const fetched = data.voices.map(v => {
          const gender = v.labels?.gender || (v.category === "premade" ? "neutral" : "custom");
          const accent = v.labels?.accent || "Standard";
          const tags = [];
          if (v.labels?.accent) tags.push(v.labels.accent);
          if (v.labels?.["use case"]) tags.push(v.labels["use case"]);
          if (v.labels?.description) tags.push(v.labels.description);
          if (tags.length === 0) tags.push(v.category || "Voice");

          return {
            voice_id: v.voice_id,
            name: v.name,
            category: v.category ? v.category.charAt(0).toUpperCase() + v.category.slice(1) : "ElevenLabs",
            gender: gender.toLowerCase(),
            accent: accent,
            description: v.labels?.description || `High-fidelity voice for ${v.labels?.["use case"] || "general speech"}.`,
            tags: tags.slice(0, 3),
            preview_url: v.preview_url
          };
        });

        const customVoices = fetched.filter(v => v.category !== "Premade");
        const premadeVoices = fetched.filter(v => v.category === "Premade");

        state.voices = [...customVoices, ...premadeVoices];
        renderVoiceList();
        showToast(`Synced ${data.voices.length} voices from your ElevenLabs account!`, "success");
      }
    }
  } catch (err) {
    console.warn("Failed to sync voices:", err);
  } finally {
    elements.syncVoicesBtn.classList.remove("spinning");
  }
}

function openApiKeyModal() {
  elements.apiKeyModal.classList.remove("hidden");
  elements.apiKeyInput.value = state.apiKey;
  elements.keyVerificationResult.classList.add("hidden");
  elements.apiKeyInput.focus();
}

function closeApiKeyModal() {
  elements.apiKeyModal.classList.add("hidden");
}

elements.toggleKeyVisibilityBtn.addEventListener("click", () => {
  const isPass = elements.apiKeyInput.type === "password";
  elements.apiKeyInput.type = isPass ? "text" : "password";
  elements.eyeShowIcon.classList.toggle("hidden", isPass);
  elements.eyeHideIcon.classList.toggle("hidden", !isPass);
});

elements.saveApiKeyBtn.addEventListener("click", async () => {
  const enteredKey = elements.apiKeyInput.value.trim();

  if (!enteredKey) {
    showToast("Please enter a valid ElevenLabs API key.", "error");
    return;
  }

  elements.saveKeyBtnText.textContent = "Verifying...";
  elements.saveKeySpinner.classList.remove("hidden");
  elements.saveApiKeyBtn.disabled = true;

  const result = await fetchSubscriptionQuota(enteredKey);

  elements.saveKeyBtnText.textContent = "Save & Verify Key";
  elements.saveKeySpinner.classList.add("hidden");
  elements.saveApiKeyBtn.disabled = false;

  if (result.success) {
    state.apiKey = enteredKey;
    localStorage.setItem("elevenlabs_api_key", enteredKey);
    updateApiKeyUIState();
    elements.keyVerificationResult.className = "verification-banner success";
    elements.keyVerificationResult.textContent = `✓ API Key verified! Tier: ${result.data.tier.toUpperCase()} (${result.data.character_count} / ${result.data.character_limit} chars used).`;
    elements.keyVerificationResult.classList.remove("hidden");

    fetchAccountVoices(enteredKey);

    setTimeout(() => {
      closeApiKeyModal();
      showToast("ElevenLabs API Key connected successfully!", "success");
    }, 1200);
  } else {
    elements.keyVerificationResult.className = "verification-banner error";
    elements.keyVerificationResult.textContent = `✕ Verification failed: ${result.error || "Please check that your key is correct."}`;
    elements.keyVerificationResult.classList.remove("hidden");
  }
});

elements.clearApiKeyBtn.addEventListener("click", () => {
  state.apiKey = "";
  localStorage.removeItem("elevenlabs_api_key");
  elements.apiKeyInput.value = "";
  elements.keyVerificationResult.className = "verification-banner";
  elements.keyVerificationResult.classList.add("hidden");
  updateApiKeyUIState();
  showToast("API Key removed. Reverted to demo mode.", "info");
  closeApiKeyModal();
});

elements.apiKeyModalBtn.addEventListener("click", openApiKeyModal);
elements.closeModalBtn.addEventListener("click", closeApiKeyModal);
elements.cancelModalBtn.addEventListener("click", closeApiKeyModal);

elements.apiKeyModal.addEventListener("click", (e) => {
  if (e.target === elements.apiKeyModal) closeApiKeyModal();
});

// ==========================================================================
// 7. Voice Selection & Filtering
// ==========================================================================
function getSelectedVoice() {
  return state.voices.find(v => v.voice_id === state.selectedVoiceId) || state.voices[0];
}

function updateActiveVoiceBanner() {
  const voice = getSelectedVoice();
  if (!voice) return;

  elements.activeVoiceAvatar.textContent = voice.name.charAt(0);
  elements.activeVoiceName.textContent = voice.name;
  elements.activeVoiceCategory.textContent = voice.category || "Voice";
  elements.activeVoiceDesc.textContent = voice.description || `ElevenLabs AI Voice: ${voice.name}`;

  elements.activeVoiceTags.innerHTML = "";
  (voice.tags || [voice.accent || "Standard"]).forEach(tag => {
    const span = document.createElement("span");
    span.className = "voice-tag";
    span.textContent = tag;
    elements.activeVoiceTags.appendChild(span);
  });
}

function renderVoiceList() {
  elements.voiceGridContainer.innerHTML = "";

  const filtered = state.voices.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      (v.accent && v.accent.toLowerCase().includes(state.searchQuery.toLowerCase())) ||
      (v.tags && v.tags.some(t => t.toLowerCase().includes(state.searchQuery.toLowerCase())));

    if (!matchesSearch) return false;

    if (state.activeFilter === "all") return true;
    if (state.activeFilter === "female") return v.gender === "female";
    if (state.activeFilter === "male") return v.gender === "male";
    if (state.activeFilter === "narration") return v.tags.some(t => t.toLowerCase().includes("narration") || t.toLowerCase().includes("story"));
    if (state.activeFilter === "character") return v.tags.some(t => t.toLowerCase().includes("character") || t.toLowerCase().includes("commercial"));
    return true;
  });

  if (filtered.length === 0) {
    elements.voiceGridContainer.innerHTML = `
      <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No voices found matching "${state.searchQuery}".
      </div>
    `;
    return;
  }

  filtered.forEach(voice => {
    const card = document.createElement("div");
    card.className = `voice-card ${voice.voice_id === state.selectedVoiceId ? "selected" : ""}`;
    card.setAttribute("data-voice-id", voice.voice_id);

    card.innerHTML = `
      <div class="voice-card-left">
        <div class="voice-card-avatar">${voice.name.charAt(0)}</div>
        <div class="voice-card-info">
          <div class="voice-card-name-row">
            <span class="voice-card-name">${voice.name}</span>
            <span class="voice-category-badge">${voice.category}</span>
          </div>
          <div class="voice-card-tags">${(voice.tags || []).join(" • ")}</div>
        </div>
      </div>
      <button class="voice-preview-btn" title="Preview voice audio" aria-label="Preview ${voice.name}">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      </button>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest(".voice-preview-btn")) return;
      state.selectedVoiceId = voice.voice_id;
      updateActiveVoiceBanner();
      renderVoiceList();
    });

    const previewBtn = card.querySelector(".voice-preview-btn");
    previewBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      playVoicePreview(voice);
    });

    elements.voiceGridContainer.appendChild(card);
  });
}

function playVoicePreview(voice) {
  initAudioContext();
  if (voice.preview_url) {
    loadAndPlayAudio(voice.preview_url, null, `${voice.name} - Voice Sample`);
    showToast(`Playing sample audio for ${voice.name}`, "info");
  } else {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(`Hello! This is ${voice.name}, synthesized with Voice AI neural technology.`);
      utterance.pitch = voice.gender === 'female' ? 1.1 : 0.9;
      utterance.rate = 1.0;
      window.speechSynthesis.speak(utterance);
      showToast(`Playing sample for ${voice.name}`, "info");
    }
  }
}

elements.voiceSearchInput.addEventListener("input", (e) => {
  state.searchQuery = e.target.value.trim();
  renderVoiceList();
});

elements.filterPills.forEach(pill => {
  pill.addEventListener("click", () => {
    elements.filterPills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    state.activeFilter = pill.getAttribute("data-filter");
    renderVoiceList();
  });
});

elements.syncVoicesBtn.addEventListener("click", () => {
  if (!state.apiKey) {
    showToast("Please enter an ElevenLabs API key first to sync voices.", "info");
    openApiKeyModal();
    return;
  }
  fetchAccountVoices(state.apiKey);
});

// ==========================================================================
// 8. Text Input, Sliders & Controls
// ==========================================================================
function updateCharCount() {
  const len = elements.speechTextInput.value.length;
  elements.charCount.textContent = len.toLocaleString();

  const countWrapper = elements.charCount.parentElement;
  if (len > 4500) {
    countWrapper.className = "char-count-wrapper limit";
  } else if (len > 3500) {
    countWrapper.className = "char-count-wrapper warning";
  } else {
    countWrapper.className = "char-count-wrapper";
  }
}

elements.speechTextInput.addEventListener("input", updateCharCount);

elements.clearTextBtn.addEventListener("click", () => {
  elements.speechTextInput.value = "";
  updateCharCount();
  elements.speechTextInput.focus();
});

elements.pasteTextBtn.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    if (text) {
      elements.speechTextInput.value = text;
      updateCharCount();
      showToast("Pasted text from clipboard!", "success");
    }
  } catch (err) {
    elements.speechTextInput.focus();
    showToast("Clipboard access denied or unavailable. Please paste manually.", "info");
  }
});

elements.insertPauseBtn.addEventListener("click", () => {
  insertAtCursor(elements.speechTextInput, " ... ");
  updateCharCount();
});

elements.insertLongPauseBtn.addEventListener("click", () => {
  insertAtCursor(elements.speechTextInput, " ...... ");
  updateCharCount();
});

function insertAtCursor(textarea, textToInsert) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const val = textarea.value;
  textarea.value = val.substring(0, start) + textToInsert + val.substring(end);
  textarea.selectionStart = textarea.selectionEnd = start + textToInsert.length;
  textarea.focus();
}

elements.promptChips.forEach(chip => {
  chip.addEventListener("click", () => {
    const key = chip.getAttribute("data-sample");
    if (SAMPLE_PROMPTS[key]) {
      elements.speechTextInput.value = SAMPLE_PROMPTS[key];
      updateCharCount();
      showToast(`Loaded ${chip.textContent.trim()} prompt!`, "info");
    }
  });
});

// Fine-tuning Sliders
elements.stabilitySlider.addEventListener("input", (e) => {
  elements.stabilityVal.textContent = `${e.target.value}%`;
});

elements.similaritySlider.addEventListener("input", (e) => {
  elements.similarityVal.textContent = `${e.target.value}%`;
});

elements.styleSlider.addEventListener("input", (e) => {
  elements.styleVal.textContent = `${e.target.value}%`;
});

elements.speechSpeedSlider.addEventListener("input", (e) => {
  const factor = (parseInt(e.target.value, 10) / 100).toFixed(2);
  elements.speechSpeedVal.textContent = `${factor}x`;
});

elements.modelSelect.addEventListener("change", (e) => {
  const opt = e.target.options[e.target.selectedIndex].text;
  elements.activeModelBadge.textContent = opt.split("(")[0].trim();
});

elements.outputFormatSelect.addEventListener("change", (e) => {
  const fmt = e.target.value;
  const isWav = fmt.startsWith("pcm_");
  elements.downloadBtnText.textContent = isWav ? "Download WAV" : "Download MP3";
  if (fmt === "mp3_44100_128") elements.activeFormatTag.textContent = "MP3 • 128k";
  else if (fmt === "mp3_44100_192") elements.activeFormatTag.textContent = "MP3 • 192k";
  else if (fmt === "pcm_44100") elements.activeFormatTag.textContent = "WAV • 44.1k Studio";
  else if (fmt === "pcm_24000") elements.activeFormatTag.textContent = "WAV • 24k Broadcast";
  else if (fmt === "pcm_16000") elements.activeFormatTag.textContent = "WAV • 16k Archive";
});

// Collapsible settings toggle
elements.settingsToggle.addEventListener("click", () => {
  elements.settingsContent.classList.toggle("hidden");
  const chevron = elements.settingsToggle.querySelector(".btn-chevron");
  if (elements.settingsContent.classList.contains("hidden")) {
    chevron.style.transform = "rotate(-90deg)";
  } else {
    chevron.style.transform = "rotate(0deg)";
  }
});

// Real-Time Pitch Shift DSP Tuning
function applyPitchShift(semitones) {
  state.pitchSemitones = semitones;
  const baseRate = state.speeds[state.playbackSpeedIndex];

  if (semitones === 0) {
    audioElement.preservesPitch = true;
    audioElement.playbackRate = baseRate;
  } else {
    // Pitch shift formula: 2^(semitones / 12)
    const pitchFactor = Math.pow(2, semitones / 12);
    audioElement.preservesPitch = false;
    audioElement.playbackRate = baseRate * pitchFactor;
  }
}

elements.pitchSlider.addEventListener("input", (e) => {
  const st = parseInt(e.target.value, 10);
  elements.pitchVal.textContent = `${st > 0 ? "+" : ""}${st} st`;
  applyPitchShift(st);
});

elements.resetPitchBtn.addEventListener("click", () => {
  elements.pitchSlider.value = 0;
  elements.pitchVal.textContent = "0 st";
  applyPitchShift(0);
  showToast("Pitch reset to original voice pitch.", "info");
});

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    if (!state.isGenerating) {
      generateSpeech();
    }
  }
});

// ==========================================================================
// 9. ElevenLabs Speech Synthesis Core
// ==========================================================================
async function generateSpeech() {
  const text = elements.speechTextInput.value.trim();

  if (!text) {
    showToast("Please enter some text to synthesize first.", "error");
    elements.speechTextInput.focus();
    return;
  }

  if (!state.apiKey) {
    const confirmDemo = confirm(
      "ElevenLabs API Key is not configured yet!\n\n" +
      "To produce hyper-realistic, studio-grade voices via ElevenLabs, click 'OK' to enter your API key now.\n\n" +
      "Or click 'Cancel' to try a browser speech demo."
    );

    if (confirmDemo) {
      openApiKeyModal();
      return;
    } else {
      runDemoSpeechFallback(text);
      return;
    }
  }

  initAudioContext();
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  setGeneratingState(true);

  const voice = getSelectedVoice();
  const modelId = elements.modelSelect.value;
  const outputFormat = elements.outputFormatSelect.value;
  const stability = parseFloat(elements.stabilitySlider.value) / 100;
  const similarityBoost = parseFloat(elements.similaritySlider.value) / 100;
  const style = parseFloat(elements.styleSlider.value) / 100;
  const speechSpeed = parseFloat(elements.speechSpeedSlider.value) / 100;
  const useSpeakerBoost = elements.speakerBoostToggle.checked;

  try {
    elements.generationStatusText.textContent = `Connecting to ElevenLabs API (${voice.name})...`;

    const requestBody = {
      text: text,
      model_id: modelId,
      voice_settings: {
        stability: stability,
        similarity_boost: similarityBoost,
        style: style,
        use_speaker_boost: useSpeakerBoost,
        speed: speechSpeed
      }
    };

    const startTime = performance.now();
    const endpointUrl = `https://api.elevenlabs.io/v1/text-to-speech/${voice.voice_id}?output_format=${outputFormat}`;

    const response = await fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": state.apiKey,
        "Accept": outputFormat.startsWith("pcm_") ? "audio/L16" : "audio/mpeg"
      },
      body: JSON.stringify(requestBody)
    });

    const elapsed = ((performance.now() - startTime) / 1000).toFixed(1);

    if (!response.ok) {
      let errMessage = `Error ${response.status}: Failed to generate speech.`;
      try {
        const errJson = await response.json();
        if (errJson.detail && errJson.detail.message) {
          errMessage = errJson.detail.message;
        } else if (errJson.message) {
          errMessage = errJson.message;
        }
      } catch (_) {}

      if (response.status === 401) {
        if (errMessage.includes("API key ID used as API key") || errMessage.includes("sk_")) {
          errMessage = "⚠️ You provided the 'API Key ID' instead of the secret API Key. ElevenLabs secret keys start with 'sk_'. Please create or copy your 'sk_' key from elevenlabs.io/app/settings/api-keys.";
        } else {
          errMessage = "Invalid ElevenLabs API Key. Please click 'API Key' to update.";
        }
      } else if (response.status === 429) {
        errMessage = "ElevenLabs quota exceeded or rate limit reached. Please check your account quota.";
      }

      throw new Error(errMessage);
    }

    elements.generationStatusText.textContent = `Audio received in ${elapsed}s! Processing stream...`;

    let audioBlob;
    let fileExt;

    if (outputFormat.startsWith("pcm_")) {
      // Decode PCM bytes and pack into standard WAV container
      const sampleRate = outputFormat === "pcm_16000" ? 16000 : (outputFormat === "pcm_24000" ? 24000 : 44100);
      const arrayBuffer = await response.arrayBuffer();
      audioBlob = pcmToWav(arrayBuffer, sampleRate, 1);
      fileExt = "wav";
    } else {
      audioBlob = await response.blob();
      fileExt = "mp3";
    }

    const audioUrl = URL.createObjectURL(audioBlob);

    state.currentBlob = audioBlob;
    state.currentFormatExt = fileExt;
    state.currentTitle = `VoiceAI_${voice.name}_${Date.now()}`;
    elements.downloadBtnText.textContent = fileExt === "wav" ? "Download WAV" : "Download MP3";

    loadAndPlayAudio(audioUrl, audioBlob, `Speech - ${voice.name}`);

    addToHistory({
      id: Date.now(),
      text: text,
      voiceName: voice.name,
      voiceId: voice.voice_id,
      modelId: modelId,
      format: outputFormat,
      audioUrl: audioUrl,
      blob: audioBlob,
      fileExt: fileExt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    fetchSubscriptionQuota(state.apiKey);

    showToast(`Speech synthesized in ${elapsed}s (${fileExt.toUpperCase()})!`, "success");
  } catch (err) {
    console.error("ElevenLabs TTS Error:", err);
    showToast(err.message, "error");
    elements.generationStatusText.textContent = "Generation failed. Check API key & quota.";
  } finally {
    setGeneratingState(false);
  }
}

function setGeneratingState(generating) {
  state.isGenerating = generating;
  elements.generateBtn.disabled = generating;

  if (generating) {
    elements.generateBtnText.textContent = "Synthesizing Audio...";
    elements.generateSpinner.classList.remove("hidden");
    elements.audioStatusBadge.textContent = "Synthesizing...";
    elements.audioStatusBadge.className = "badge-subtle playing";
  } else {
    elements.generateBtnText.textContent = "Generate Speech";
    elements.generateSpinner.classList.add("hidden");
    elements.audioStatusBadge.textContent = state.isPlaying ? "Playing" : "Ready";
    elements.audioStatusBadge.className = state.isPlaying ? "badge-subtle playing" : "badge-subtle";
  }
}

function runDemoSpeechFallback(text) {
  if (!('speechSynthesis' in window)) {
    showToast("Web Speech API is not supported in this browser. Please enter an ElevenLabs API key.", "error");
    openApiKeyModal();
    return;
  }

  showToast("Playing preview using local browser voice engine...", "info");
  window.speechSynthesis.cancel();

  const voice = getSelectedVoice();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = voice.gender === 'female' ? 1.15 : 0.85;
  utterance.rate = 1.0;

  utterance.onstart = () => {
    state.isPlaying = true;
    elements.audioStatusBadge.textContent = "Demo Playing";
    elements.audioStatusBadge.className = "badge-subtle playing";
    elements.playIcon.classList.add("hidden");
    elements.pauseIcon.classList.remove("hidden");
    elements.visualizerPlaceholder.classList.add("hidden");
  };

  utterance.onend = () => {
    state.isPlaying = false;
    elements.audioStatusBadge.textContent = "Ready";
    elements.audioStatusBadge.className = "badge-subtle";
    elements.playIcon.classList.remove("hidden");
    elements.pauseIcon.classList.add("hidden");
    elements.visualizerPlaceholder.classList.remove("hidden");
  };

  utterance.onerror = () => {
    state.isPlaying = false;
    elements.audioStatusBadge.textContent = "Ready";
  };

  window.speechSynthesis.speak(utterance);
}

// ==========================================================================
// 10. Audio Player & Media Controls
// ==========================================================================
function loadAndPlayAudio(url, blob = null, title = "Speech Audio") {
  initAudioContext();
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  if (state.currentAudioUrl && state.currentAudioUrl.startsWith("blob:") && state.currentAudioUrl !== url) {
    URL.revokeObjectURL(state.currentAudioUrl);
  }

  state.currentAudioUrl = url;
  state.currentBlob = blob;
  audioElement.src = url;

  applyPitchShift(state.pitchSemitones);

  elements.downloadAudioBtn.disabled = !blob && !url;
  elements.visualizerPlaceholder.classList.add("hidden");

  audioElement.play()
    .then(() => {
      state.isPlaying = true;
      updatePlayPauseUI(true);
      elements.generationStatusText.textContent = `Playing: ${title}`;
    })
    .catch((err) => {
      console.warn("Playback requires user gesture or autoplay policy:", err);
      updatePlayPauseUI(false);
    });
}

function updatePlayPauseUI(playing) {
  state.isPlaying = playing;
  if (playing) {
    elements.playIcon.classList.add("hidden");
    elements.pauseIcon.classList.remove("hidden");
    elements.audioStatusBadge.textContent = "Playing";
    elements.audioStatusBadge.className = "badge-subtle playing";
    elements.visualizerPlaceholder.classList.add("hidden");
  } else {
    elements.playIcon.classList.remove("hidden");
    elements.pauseIcon.classList.add("hidden");
    elements.audioStatusBadge.textContent = "Paused";
    elements.audioStatusBadge.className = "badge-subtle";
  }
}

function formatTime(seconds) {
  if (isNaN(seconds) || !isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

audioElement.addEventListener("timeupdate", () => {
  const current = audioElement.currentTime;
  const duration = audioElement.duration || 1;
  const progressPercent = (current / duration) * 100;

  elements.currentTimeDisplay.textContent = formatTime(current);
  elements.scrubFill.style.width = `${progressPercent}%`;
  elements.scrubHandle.style.left = `${progressPercent}%`;
});

audioElement.addEventListener("loadedmetadata", () => {
  elements.totalDurationDisplay.textContent = formatTime(audioElement.duration);
});

audioElement.addEventListener("ended", () => {
  state.isPlaying = false;
  updatePlayPauseUI(false);
  elements.audioStatusBadge.textContent = "Ended";
  elements.audioStatusBadge.className = "badge-subtle";
  elements.scrubFill.style.width = "0%";
  elements.scrubHandle.style.left = "0%";
  elements.currentTimeDisplay.textContent = "0:00";
});

elements.playPauseBtn.addEventListener("click", () => {
  initAudioContext();
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  if (!audioElement.src) {
    generateSpeech();
    return;
  }

  if (audioElement.paused) {
    audioElement.play();
    updatePlayPauseUI(true);
  } else {
    audioElement.pause();
    updatePlayPauseUI(false);
  }
});

elements.scrubTrack.addEventListener("click", (e) => {
  if (!audioElement.duration) return;
  const rect = elements.scrubTrack.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const ratio = Math.max(0, Math.min(1, clickX / rect.width));
  audioElement.currentTime = ratio * audioElement.duration;
});

elements.skipBackBtn.addEventListener("click", () => {
  if (audioElement.currentTime) {
    audioElement.currentTime = Math.max(0, audioElement.currentTime - 5);
  }
});

elements.skipForwardBtn.addEventListener("click", () => {
  if (audioElement.duration) {
    audioElement.currentTime = Math.min(audioElement.duration, audioElement.currentTime + 5);
  }
});

elements.playbackSpeedBtn.addEventListener("click", () => {
  state.playbackSpeedIndex = (state.playbackSpeedIndex + 1) % state.speeds.length;
  const newSpeed = state.speeds[state.playbackSpeedIndex];
  elements.playbackSpeedBtn.textContent = `${newSpeed}x`;
  applyPitchShift(state.pitchSemitones);
  showToast(`Speed set to ${newSpeed}x`, "info");
});

elements.volumeSlider.addEventListener("input", (e) => {
  const val = parseFloat(e.target.value);
  state.volume = val;
  audioElement.volume = val;
  updateVolumeIcons(val === 0);
});

elements.muteToggleBtn.addEventListener("click", () => {
  state.isMuted = !state.isMuted;
  audioElement.muted = state.isMuted;
  updateVolumeIcons(state.isMuted);
});

function updateVolumeIcons(isMuted) {
  elements.volHighIcon.classList.toggle("hidden", isMuted);
  elements.volMuteIcon.classList.toggle("hidden", !isMuted);
}

// Format-aware Download
elements.downloadAudioBtn.addEventListener("click", () => {
  if (!state.currentAudioUrl) return;

  const a = document.createElement("a");
  a.href = state.currentAudioUrl;
  const ext = state.currentFormatExt || "mp3";
  a.download = `${state.currentTitle || "voice_ai_speech"}.${ext}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  showToast(`Downloaded ${ext.toUpperCase()} audio file!`, "success");
});

// ==========================================================================
// 11. Generation History
// ==========================================================================
function addToHistory(item) {
  state.history.unshift(item);
  if (state.history.length > 25) {
    state.history.pop();
  }
  renderHistoryList();
}

function renderHistoryList() {
  elements.historyCountPill.textContent = state.history.length;

  if (state.history.length === 0) {
    elements.historyEmptyState.classList.remove("hidden");
    return;
  }

  elements.historyEmptyState.classList.add("hidden");
  elements.historyList.querySelectorAll(".history-item").forEach(el => el.remove());

  state.history.forEach(item => {
    const card = document.createElement("div");
    card.className = "history-item";

    const cleanModel = (item.modelId || "").replace("eleven_", "").replace(/_/g, " ");
    const fileExt = item.fileExt || "mp3";

    card.innerHTML = `
      <div class="history-item-left">
        <button class="history-play-btn" title="Play speech audio" aria-label="Play">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </button>
        <div class="history-details">
          <div class="history-meta-row">
            <span class="history-voice-name">${item.voiceName}</span>
            <span class="history-model">${cleanModel}</span>
            <span class="voice-category-badge">${fileExt.toUpperCase()}</span>
            <span class="history-time">${item.timestamp}</span>
          </div>
          <p class="history-text-preview" title="${item.text.replace(/"/g, '&quot;')}">${item.text}</p>
        </div>
      </div>
      <div class="history-actions">
        <button class="btn-icon-subtle history-download-btn" title="Download ${fileExt.toUpperCase()}" aria-label="Download">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
        </button>
        <button class="btn-icon-subtle history-delete-btn" title="Delete from history" aria-label="Delete">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
      </div>
    `;

    card.querySelector(".history-play-btn").addEventListener("click", () => {
      loadAndPlayAudio(item.audioUrl, item.blob, `History - ${item.voiceName}`);
    });

    card.querySelector(".history-download-btn").addEventListener("click", () => {
      const a = document.createElement("a");
      a.href = item.audioUrl;
      a.download = `voice_ai_${item.voiceName.toLowerCase()}_${item.id}.${fileExt}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast(`Download started (${fileExt.toUpperCase()})!`, "success");
    });

    card.querySelector(".history-delete-btn").addEventListener("click", () => {
      state.history = state.history.filter(h => h.id !== item.id);
      renderHistoryList();
      showToast("Item removed from history.", "info");
    });

    elements.historyList.appendChild(card);
  });
}

elements.clearHistoryBtn.addEventListener("click", () => {
  if (state.history.length === 0) return;
  if (confirm("Are you sure you want to clear all generation history?")) {
    state.history = [];
    renderHistoryList();
    showToast("History cleared.", "info");
  }
});

// ==========================================================================
// 12. App Initialization
// ==========================================================================
function initApp() {
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  updateApiKeyUIState();
  updateActiveVoiceBanner();
  renderVoiceList();
  updateCharCount();
  startVisualizer();

  if (state.apiKey) {
    fetchAccountVoices(state.apiKey);
  }

  elements.speechTextInput.value = SAMPLE_PROMPTS.story;
  updateCharCount();

  elements.generateBtn.addEventListener("click", generateSpeech);
}

document.addEventListener("DOMContentLoaded", initApp);
