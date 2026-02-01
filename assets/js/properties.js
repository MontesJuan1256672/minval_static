// Array de propiedades en venta
const properties = [
    {
        id: 1,
        type: 'casa',
        titulo: 'Casa amplia a minutos de la nueva garita',
        precio: '$2,750,000',
        ubicacion: 'Las Torres Otay',
        caracteristicas: {
            habitaciones: 2,
            baños: 3,
            m2: 280,
            estacionamientos: 3
        },
        descripcion: 'Hermosa casa de dos pisos, con aplios espacios y acabados estilo rustico. Con opción para ampliación.',
        imagenes: [
            'assets/images/properties/casa1/1.jpeg',
            'assets/images/properties/casa1/2.jpeg',
            'assets/images/properties/casa1/3.jpeg',
            'assets/images/properties/casa1/4.jpeg',
            'assets/images/properties/casa1/5.jpeg'
        ]
    },
    {
        id: 3,
        type: 'terreno',
        titulo: 'Terreno turistico/habitacional en San Felipe',
        precio: '$165 por m2',
        ubicacion: 'Dorado Ranch San Felipe',
        caracteristicas: {
            habitaciones: 0,
            baños: 0,
            m2: 22.1,
            unidad: 'hectáreas',
            estacionamientos: 0
        },
        descripcion: 'Excelente oportunidad de inversión. Predio rustico/habitacional al precio más barato en la zona.',
        imagenes: [
            'assets/images/properties/terreno1/1.jpg',
            'assets/images/properties/terreno1/2.jpg',
            'assets/images/properties/terreno1/3.png',
            'assets/images/properties/terreno1/1.mp4'
        ]
    },
    {
        id: 6,
        type: 'terreno',
        titulo: 'Terreno Rustico en ruta del vino',
        precio: '$75,000 dlls',
        ubicacion: 'Carretera libre Tecate-Ensenada',
        caracteristicas: {
            habitaciones: 1,
            baños: 1,
            m2: 1000,
            estacionamientos: 0
        },
        descripcion: 'Terreno rustico dentro de Rancho el Fresno el cual cuenta con contenedor adaptado para vivienda y amenidades.',
        imagenes: [
            'assets/images/properties/terreno2/1.jpeg',
            'assets/images/properties/terreno2/2.jpeg',
            'assets/images/properties/terreno2/3.jpeg',
            'assets/images/properties/terreno2/4.jpeg',
            'assets/images/properties/terreno2/5.jpeg',
            'assets/images/properties/terreno2/6.jpeg',
            'assets/images/properties/terreno2/7.png'
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
                        <span>${property.caracteristicas.m2} ${property.caracteristicas.unidad || 'm²'}</span>
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
    modal.className = 'fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50';
    modal.id = 'galleryModal';
    
    let imageIndex = 0;
    const images = property.imagenes;

    modal.innerHTML = `
        <div class="relative w-full h-full flex items-center justify-center">
            <div id="mediaContainer" class="w-full h-full flex items-center justify-center">
                ${images[0].endsWith('.mp4') ? 
                    `<video id="mainMedia" src="${images[0]}" class="max-w-full max-h-full object-contain" controls></video>` :
                    `<img id="mainMedia" src="${images[0]}" alt="Galería" class="max-w-full max-h-full object-contain">`
                }
            </div>
            
            <button onclick="previousImage()" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transition z-10">
                <i class="fas fa-chevron-left"></i>
            </button>
            
            <button onclick="nextImage()" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transition z-10">
                <i class="fas fa-chevron-right"></i>
            </button>
            
            <button onclick="closeGallery()" class="absolute top-6 right-6 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition z-10">
                <i class="fas fa-times"></i>
            </button>
            
            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
                <span id="imageCounter">1</span> / ${images.length}
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
    const media = window.currentImages[index];
    const container = document.getElementById('mediaContainer');
    
    if (media.endsWith('.mp4')) {
        container.innerHTML = `<video id="mainMedia" src="${media}" class="max-w-full max-h-full object-contain" controls></video>`;
    } else {
        container.innerHTML = `<img id="mainMedia" src="${media}" alt="Galería" class="max-w-full max-h-full object-contain">`;
    }
    
    document.getElementById('imageCounter').textContent = index + 1;
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderProperties('all');
});
