document.addEventListener('DOMContentLoaded', function() {
    const condominios = [
        {
            nome: "Condomínio Itália II",
            lat: -11.8462937,
            lng: -55.5369219,
            url: "italia-2.html" // URL para redirecionamento
        },
        {
            nome: "Condomínio Jaqueiras",
            lat: -11.8826999,
            lng: -55.5120047,
            url: "cond.html"
        },
        {
            nome: "Residencial Geranios",
            lat: -11.8808476,
            lng: -55.5159368,
            url: "cond.html"
        },
        {
            nome: "Residencial Advanced",
            lat: -11.8806637,
            lng: -55.5157829,
            url: "cond.html" // URL para redirecionamento
        },
        {
            nome: "Residencial Celeste I",
            lat: -11.8812435,
            lng: -55.5163199,
            url: "cond.html"
        },
        {
            nome: "Residencial Celeste II",
            lat: -11.8808813,
            lng: -55.5164563,
            url: "cond.html"
        },
        {
            nome: "Residencial Jaboticabeiras",
            lat: -11.8809212,
            lng: -55.5163329,
            url: "cond.html"
        }
    ];

    const mapa = L.map('mapa').setView([-11.861000, -55.514900], 14.42);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(mapa);

    // Adiciona marcadores com redirecionamento
    condominios.forEach(condominio => {
        const popupContent = `
            <div style="cursor: pointer;" onclick="window.location.href='${condominio.url}'">
                <b>${condominio.nome}</b><br>
                Clique para mais detalhes
            </div>
        `;

        L.marker([condominio.lat, condominio.lng])
            .addTo(mapa)
            .bindPopup(popupContent);
    });

    // Redirecionamento ao clicar no popup de coordenadas
    mapa.on('popupopen', function(e) {
        const popup = e.popup;
        popup.getElement().style.cursor = 'pointer'; 
        popup.getElement().onclick = () => {
            window.location.href = [condominio.url]; // Página genérica para coordenadas
        };
    });

    L.control.scale({ imperial: false }).addTo(mapa);
});