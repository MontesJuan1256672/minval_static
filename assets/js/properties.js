// Array de propiedades en venta
const properties = [
    {
        id: 1,
        type: 'casa',
        titulo: 'Casa Moderna en Residencial Rio Tijuana',
        precio: '$850,000',
        ubicacion: 'Residencial Rio Tijuana',
        caracteristicas: {
            habitaciones: 3,
            baños: 2.5,
            m2: 280,
            estacionamientos: 2
        },
        descripcion: 'Hermosa casa de tres pisos con diseño moderno, ubicada en uno de los residenciales más exclusivos de Tijuana.',
        imagenes: [
            'assets/images/properties/casa1/principal.jpg',
            'assets/images/properties/casa1/sala.jpg',
            'assets/images/properties/casa1/cocina.jpg',
            'assets/images/properties/casa1/jardin.jpg'
        ]
    },
    {
        id: 2,
        type: 'departamento',
        titulo: 'Departamento de Lujo en Centro de Tijuana',
        precio: '$450,000',
        ubicacion: 'Centro de Tijuana',
        caracteristicas: {
            habitaciones: 2,
            baños: 2,
            m2: 120,
            estacionamientos: 1
        },
        descripcion: 'Moderno departamento en el corazón del centro, con acceso a todos los servicios y comercios cercanos.',
        imagenes: [
            'assets/images/properties/depto1/principal.jpg',
            'assets/images/properties/depto1/sala.jpg',
            'assets/images/properties/depto1/recamara.jpg',
            'assets/images/properties/depto1/vista.jpg'
        ]
    },
    {
        id: 3,
        type: 'terreno',
        titulo: 'Terreno Comercial en Vía Rápida Poniente',
        precio: '$600,000',
        ubicacion: 'Vía Rápida Poniente',
        caracteristicas: {
            habitaciones: 0,
            baños: 0,
            m2: 500,
            estacionamientos: 0
        },
        descripcion: 'Excelente oportunidad de inversión. Terreno en zona comercial con alto flujo vehicular y potencial de crecimiento.',
        imagenes: [
            'assets/images/properties/terreno1/principal.jpg',
            'assets/images/properties/terreno1/vista1.jpg',
            'assets/images/properties/terreno1/vista2.jpg',
            'assets/images/properties/terreno1/croquis.jpg'
        ]
    },
    {
        id: 4,
        type: 'casa',
        titulo: 'Casa con Alberca en Playas de Tijuana',
        precio: '$1,200,000',
        ubicacion: 'Playas de Tijuana',
        caracteristicas: {
            habitaciones: 4,
            baños: 3,
            m2: 400,
            estacionamientos: 3
        },
        descripcion: 'Lujosa casa frente a playa con piscina, jacuzzi y vistas al océano. Una inversión única en la zona.',
        imagenes: [
            'assets/images/properties/casa2/principal.jpg',
            'assets/images/properties/casa2/alberca.jpg',
            'assets/images/properties/casa2/comedor.jpg',
            'assets/images/properties/casa2/playa.jpg'
        ]
    },
    {
        id: 5,
        type: 'departamento',
        titulo: 'Departamento en Condominio Boulevard Agua Caliente',
        precio: '$380,000',
        ubicacion: 'Boulevard Agua Caliente',
        caracteristicas: {
            habitaciones: 2,
            baños: 2,
            m2: 100,
            estacionamientos: 1
        },
        descripcion: 'Departamento en condominio con amenidades completas: gimnasio, alberca, salón de eventos y área infantil.',
        imagenes: [
            'assets/images/properties/depto2/principal.jpg',
            'assets/images/properties/depto2/sala.jpg',
            'assets/images/properties/depto2/cocina.jpg',
            'assets/images/properties/depto2/amenidades.jpg'
        ]
    },
    {
        id: 6,
        type: 'terreno',
        titulo: 'Terreno Residencial en Zona Norte',
        precio: '$350,000',
        ubicacion: 'Zona Norte',
        caracteristicas: {
            habitaciones: 0,
            baños: 0,
            m2: 350,
            estacionamientos: 0
        },
        descripcion: 'Terreno plano e ideal para construir tu casa de ensueño. Zona tranquila con servicios disponibles.',
        imagenes: [
            'assets/images/properties/terreno2/principal.jpg',
            'assets/images/properties/terreno2/vista1.jpg',
            'assets/images/properties/terreno2/plano.jpg',
            'assets/images/properties/terreno2/zona.jpg'
        ]
    }
];

// Función para renderizar propiedades
function renderProperties(filter = 'all') {
    const container = document.getElementById('propertiesContainer');
    container.innerHTML = '';

    const filtered = filter === 'all' 
        ? properties 
        : properties.filter(p => p.type === filter);

    if (filtered.length === 0) {
        container.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-gray-600 text-lg">No hay propiedades disponibles en esta categoría.</p></div>';
        return;
    }

    filtered.forEach(property => {
        const card = document.createElement('div');
        card.className = 'property-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition';
        
        // Ícono según tipo
        let tipoIcon = '';
        let tipoTexto = '';
        if (property.type === 'casa') {
            tipoIcon = 'fas fa-home';
            tipoTexto = 'Casa';
        } else if (property.type === 'departamento') {
            tipoIcon = 'fas fa-building';
            tipoTexto = 'Departamento';
        } else if (property.type === 'terreno') {
            tipoIcon = 'fas fa-square';
            tipoTexto = 'Terreno';
        }

        card.innerHTML = `
            <div class="relative">
                <img src="${property.imagenes[0]}" alt="${property.titulo}" class="w-full h-64 object-cover">
                <div class="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold" style="color: var(--primary);">
                    <i class="${tipoIcon} mr-1"></i>${tipoTexto}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">${property.titulo}</h3>
                <p class="text-gray-600 text-sm mb-4"><i class="fas fa-map-marker-alt mr-2" style="color: var(--primary);"></i>${property.ubicacion}</p>
                
                <div class="flex justify-between text-sm text-gray-600 mb-4 pb-4 border-b">
                    ${property.caracteristicas.habitaciones > 0 ? `
                    <div class="flex items-center">
                        <i class="fas fa-bed mr-1" style="color: var(--primary);"></i>
                        <span>${property.caracteristicas.habitaciones} Recámara${property.caracteristicas.habitaciones > 1 ? 's' : ''}</span>
                    </div>
                    ` : ''}
                    ${property.caracteristicas.baños > 0 ? `
                    <div class="flex items-center">
                        <i class="fas fa-bath mr-1" style="color: var(--primary);"></i>
                        <span>${property.caracteristicas.baños} Baño${property.caracteristicas.baños > 1 ? 's' : ''}</span>
                    </div>
                    ` : ''}
                    <div class="flex items-center">
                        <i class="fas fa-ruler-combined mr-1" style="color: var(--primary);"></i>
                        <span>${property.caracteristicas.m2} m²</span>
                    </div>
                </div>

                <p class="text-gray-700 text-sm mb-4">${property.descripcion}</p>
                
                <div class="flex justify-between items-center">
                    <p class="text-3xl font-bold" style="color: var(--primary);">${property.precio}</p>
                    <button onclick="openGallery(${property.id})" class="px-4 py-2 rounded-lg font-semibold text-white transition" style="background-color: var(--primary); hover: opacity(0.9);">
                        <i class="fas fa-images mr-1"></i>Ver Galería
                    </button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// Función para filtrar propiedades
function filterProperties(type) {
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.style.backgroundColor = '';
        btn.style.color = 'var(--primary)';
    });
    
    event.target.classList.add('active');
    event.target.style.backgroundColor = 'var(--primary)';
    event.target.style.color = 'white';

    renderProperties(type);
}

// Función para abrir galería de imágenes
function openGallery(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4';
    modal.id = 'galleryModal';
    
    let imageIndex = 0;
    const images = property.imagenes;

    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-4xl w-full overflow-hidden">
            <div class="flex justify-between items-center p-4 border-b">
                <h2 class="text-2xl font-bold">${property.titulo}</h2>
                <button onclick="closeGallery()" class="text-3xl text-gray-600 hover:text-gray-900">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="relative bg-gray-900">
                <img id="mainImage" src="${images[0]}" alt="Galería" class="w-full h-96 object-cover">
                
                <button onclick="previousImage()" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition">
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                <button onclick="nextImage()" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition">
                    <i class="fas fa-chevron-right"></i>
                </button>
                
                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                    <span id="imageCounter">1</span> / ${images.length}
                </div>
            </div>
            
            <div class="p-6">
                <div class="grid grid-cols-4 gap-3">
                    ${images.map((img, idx) => `
                        <img src="${img}" alt="Thumbnail ${idx + 1}" class="w-full h-20 object-cover rounded cursor-pointer border-2 hover:border-amber-600 transition" onclick="selectImage(${idx})">
                    `).join('')}
                </div>

                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 class="font-bold text-lg mb-2">Información de la Propiedad</h3>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <p class="text-gray-600 text-sm">Ubicación</p>
                            <p class="font-semibold">${property.ubicacion}</p>
                        </div>
                        <div>
                            <p class="text-gray-600 text-sm">Precio</p>
                            <p class="font-semibold text-2xl" style="color: var(--primary);">${property.precio}</p>
                        </div>
                        <div>
                            <p class="text-gray-600 text-sm">Superficie</p>
                            <p class="font-semibold">${property.caracteristicas.m2} m²</p>
                        </div>
                        ${property.caracteristicas.habitaciones > 0 ? `
                        <div>
                            <p class="text-gray-600 text-sm">Recámaras</p>
                            <p class="font-semibold">${property.caracteristicas.habitaciones}</p>
                        </div>
                        ` : ''}
                    </div>
                </div>

                <div class="mt-6 flex gap-4">
                    <button onclick="openWhatsApp()" class="flex-1 btn-primary">
                        <i class="fab fa-whatsapp mr-2"></i>Contactar por WhatsApp
                    </button>
                    <button onclick="callPhone()" class="flex-1 btn-accent">
                        <i class="fas fa-phone mr-2"></i>Llamar
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Guardar referencias de funciones globales para la galería
    window.currentImageIndex = 0;
    window.currentImages = images;
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    if (modal) modal.remove();
}

function nextImage() {
    window.currentImageIndex = (window.currentImageIndex + 1) % window.currentImages.length;
    selectImage(window.currentImageIndex);
}

function previousImage() {
    window.currentImageIndex = (window.currentImageIndex - 1 + window.currentImages.length) % window.currentImages.length;
    selectImage(window.currentImageIndex);
}

function selectImage(index) {
    window.currentImageIndex = index;
    document.getElementById('mainImage').src = window.currentImages[index];
    document.getElementById('imageCounter').textContent = index + 1;

    // Actualizar thumbnails
    document.querySelectorAll('.grid.grid-cols-4 img').forEach((img, idx) => {
        if (idx === index) {
            img.style.borderColor = 'var(--primary)';
        } else {
            img.style.borderColor = 'transparent';
        }
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderProperties('all');
});
