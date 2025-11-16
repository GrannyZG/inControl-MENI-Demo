class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="w-full bg-gray-950/60 border-b border-white/10 px-6 py-3 text-sm flex items-center">
                <div class="flex flex-col">
                    <div class="text-xs uppercase tracking-[0.35em] text-gray-400">Medibach</div>
                    <div class="text-xl font-semibold tracking-wide leading-tight">Crestron Demo UI</div>
                    <div class="text-[11px] text-gray-500 mt-1">Made by inControl</div>
                </div>
            </nav>
        `;
    }
}

customElements.define("custom-navbar", CustomNavbar);
