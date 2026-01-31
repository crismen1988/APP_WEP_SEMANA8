// Base de datos de productos 
const productosDB = {
    1: {
        nombre: "KIT ALARMA NEO DSC - MODELO 585",
        descripcion: "Sistema cableado con la tecnología DSC",
        precio: "$199.99",
        stock: "Disponible",
        stockClass: "bg-success",
        envio: "Envío gratis - Entrega en 2-3 días hábiles",
        imagen: "https://static.wixstatic.com/media/864ae7_d86e278e77064b57a22a098222912d75~mv2.png/v1/fill/w_493,h_357,al_c,lg_1,q_85,enc_avif,quality_auto/alarma-dsc-quito-ecuador-585-1832.png",
        especificaciones: [
            "Compatible con línea convencional",
            "4 zonas disponibles",
            "Kit Incluye: 1 contacto magnético cableado de puerta/ventana, 1 sensor de movimiento cableado, 1 sirena, 1 teclado, 1 transformador, 1 batería y 1 caja de alarma.",
            "Tarjeta Gráfica NVIDIA RTX 3060 6GB",
            "Envía llamadas, configurable para 8 o 32 zonas (con expansoras)"
        ]
    },
    2: {
        nombre: "ELÉCTRIFICADOR HAGROY POWER i8",
        descripcion: "Energizador de 15.000 V",
        precio: "$235.30",
        stock: "Disponible",
        stockClass: "bg-success",
        envio: "Envío gratis - Entrega en 1-2 días hábiles",
        imagen: "https://static.wixstatic.com/media/864ae7_e3436cc335174785a7743b25d259101b~mv2.png/v1/fill/w_248,h_248,al_c,lg_1,q_85,enc_avif,quality_auto/electrificador-hagroy-power-i8-energizad.png",
        especificaciones: [
            "Distancia de 1.500 metros lineales",
            "Incluye 1 control remoto"
        ]
    },
    3: {
        nombre: "Kit casa inteligente",
        descripcion: "Sistemas de Domótica para casas inteligentes",
        precio: "$ 136.75",
        stock: "Pocos disponibles",
        stockClass: "bg-warning text-dark",
        envio: "Envío gratis - Entrega en 3-5 días hábiles",
        imagen: "https://static.wixstatic.com/media/864ae7_36aa57dcb74f4cdab13ff06644e5ba90~mv2.png/v1/fill/w_828,h_367,al_c,lg_1,q_85,enc_avif,quality_auto/Domotica-kit-web-quito-alexa.png",
        especificaciones: [
            "El Sistema incluye Alexa Echo Dot 4ta Gen",
            "Controlador Tuya Smart Life",
            "Enchufe Inteligente WiFi",
            "Interruptor Inteligente WiFi",
        ]
    },
    4: {
        nombre: "Teclado Mecánico RGB",
        descripcion: "Teclado mecánico gaming con switches Cherry MX, iluminación RGB personalizable y construcción de aluminio de alta calidad.",
        precio: "$ 45.50",
        stock: "Disponible",
        stockClass: "bg-success",
        envio: "Envío gratis - Entrega en 2-4 días hábiles",
        imagen: "https://nomadaware.com.ec/wp-content/uploads/NomadaWare_Teclado_Redragon_shiva_es.webp",
        especificaciones: [
            "Switches Cherry MX Red",
            "Iluminación RGB 16.8 millones de colores",
            "Construcción de aluminio aeronáutico",
            "Teclas programables",
            "Modo anti-ghosting N-Key",
            "Cable USB trenzado reforzado",
            "Reposamuñecas magnético incluido",
            "Compatible con Windows/Mac/Linux"
        ]
    }
};

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== BOTONES "VER MÁS" - MOSTRAR MODAL CON DETALLES =====
    const verMasButtons = document.querySelectorAll('.btn-ver-mas');
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    
    verMasButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            mostrarDetallesProducto(productId);
            productModal.show();
        });
    });
    
    // Función para mostrar detalles del producto en el modal
    function mostrarDetallesProducto(id) {
        const producto = productosDB[id];
        
        if (producto) {
            document.getElementById('modalProductName').textContent = producto.nombre;
            document.getElementById('modalProductDescription').textContent = producto.descripcion;
            document.getElementById('modalProductPrice').textContent = producto.precio;
            document.getElementById('modalProductImage').src = producto.imagen;
            document.getElementById('modalProductImage').alt = producto.nombre;
            document.getElementById('modalProductStock').textContent = producto.stock;
            document.getElementById('modalProductStock').className = `badge ${producto.stockClass}`;
            document.getElementById('modalShippingInfo').textContent = producto.envio;
            
            // Cargar especificaciones
            const specsList = document.getElementById('modalProductSpecs');
            specsList.innerHTML = '';
            
            producto.especificaciones.forEach(spec => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${spec}</strong>`;
                specsList.appendChild(li);
            });
        }
    }
    
    // ===== BOTÓN DE ALERTA EN SECCIÓN DE VIDEO =====
    const videoAlertBtn = document.getElementById('videoAlertBtn');
    if (videoAlertBtn) {
        videoAlertBtn.addEventListener('click', function() {
            mostrarAlertaPersonalizada(
                '¡Gracias por tu interés! Un asesor se pondrá en contacto contigo para brindarte más información.',
                'success'
            );
        });
    }
    
    // ===== VALIDACIÓN DE FORMULARIO =====
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar campos
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const mensaje = document.getElementById('mensaje');
            
            let isValid = true;
            
            // Validar nombre
            if (nombre.value.trim() === '') {
                nombre.classList.add('is-invalid');
                isValid = false;
            } else {
                nombre.classList.remove('is-invalid');
                nombre.classList.add('is-valid');
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
            }
            
            // Validar mensaje
            if (mensaje.value.trim() === '') {
                mensaje.classList.add('is-invalid');
                isValid = false;
            } else {
                mensaje.classList.remove('is-invalid');
                mensaje.classList.add('is-valid');
            }
            
            // Si es válido, mostrar mensaje de éxito
            if (isValid) {
                mostrarAlertaPersonalizada(
                    '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.',
                    'success'
                );
                
                // Mostrar mensaje de éxito debajo del formulario
                const successMessage = document.getElementById('formSuccessMessage');
                successMessage.textContent = '✓ Mensaje enviado correctamente. ¡Gracias por contactarnos!';
                successMessage.style.display = 'block';
                
                // Limpiar formulario
                contactForm.reset();
                
                // Remover clases de validación
                document.querySelectorAll('.form-control').forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                });
                
                // Ocultar mensaje después de 2 segundos
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 2000);
            } else {
                mostrarAlertaPersonalizada(
                    'Por favor completa todos los campos correctamente.',
                    'error'
                );
            }
        });
        
        // Validación en tiempo real
        document.querySelectorAll('.form-control').forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() !== '') {
                    this.classList.add('is-valid');
                    this.classList.remove('is-invalid');
                }
            });
            
            input.addEventListener('input', function() {
                this.classList.remove('is-valid', 'is-invalid');
            });
        });
    }
    
    // ===== CONTADOR DE CARACTERES EN TEXTAREA =====
    const mensajeTextarea = document.getElementById('mensaje');
    if (mensajeTextarea) {
        const charCount = document.getElementById('charCount');
        
        mensajeTextarea.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = `${count} caracteres`;
            
            if (count > 500) {
                charCount.className = 'text-danger';
            } else if (count > 300) {
                charCount.className = 'text-warning';
            } else {
                charCount.className = 'text-muted';
            }
        });
    }
    
    // ===== FUNCIÓN PARA MOSTRAR ALERTAS PERSONALIZADAS =====
    function mostrarAlertaPersonalizada(mensaje, tipo) {
        // Crear alerta personalizada
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x m-3';
        alertDiv.style.zIndex = '9999';
        alertDiv.style.minWidth = '300px';
        alertDiv.style.maxWidth = '500px';
        
        // Establecer clase según el tipo
        let icon = '';
        switch(tipo) {
            case 'success':
                alertDiv.classList.add('alert-success');
                icon = '<i class="fas fa-check-circle me-2"></i>';
                break;
            case 'error':
                alertDiv.classList.add('alert-danger');
                icon = '<i class="fas fa-exclamation-circle me-2"></i>';
                break;
            case 'info':
                alertDiv.classList.add('alert-info');
                icon = '<i class="fas fa-info-circle me-2"></i>';
                break;
            case 'warning':
                alertDiv.classList.add('alert-warning');
                icon = '<i class="fas fa-exclamation-triangle me-2"></i>';
                break;
            default:
                alertDiv.classList.add('alert-primary');
                icon = '<i class="fas fa-bell me-2"></i>';
        }
        
        // Contenido de la alerta
        alertDiv.innerHTML = `
            ${icon}${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        // Añadir al body
        document.body.appendChild(alertDiv);
        
        // Eliminar después de 2 segundos
        setTimeout(() => {
            alertDiv.classList.remove('show');
            alertDiv.classList.add('fade');
            setTimeout(() => {
                if (document.body.contains(alertDiv)) {
                    document.body.removeChild(alertDiv);
                }
            }, 300);
        }, 2000);
    }
    
    // ===== BOTÓN DE SCROLL TO TOP =====
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'btn btn-primary rounded-circle position-fixed bottom-3 end-3 d-none';
    scrollToTopBtn.style.zIndex = '1000';
    scrollToTopBtn.style.width = '50px';
    scrollToTopBtn.style.height = '50px';
    scrollToTopBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(scrollToTopBtn);
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('d-none');
        } else {
            scrollToTopBtn.classList.add('d-none');
        }
    });
    
    // ===== EFECTO DE HOVER EN TARJETAS =====
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
    
    // ===== PREVENIR ENVÍO DUPLICADO =====
    let formSubmitted = false;
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            if (formSubmitted) {
                e.preventDefault();
                mostrarAlertaPersonalizada(
                    'El formulario ya está siendo procesado. Por favor espera.',
                    'warning'
                );
                return;
            }
            
            formSubmitted = true;
            
            // Re-enable after 3 seconds
            setTimeout(() => {
                formSubmitted = false;
            }, 3000);
        });
    }
    
    // ===== BOTONES DEL MODAL =====
    const modal = document.getElementById('productModal');
    if (modal) {
        // Botón "Añadir al Carrito"
        modal.querySelector('.modal-footer .btn-success').addEventListener('click', function() {
            const productName = document.getElementById('modalProductName').textContent;
            mostrarAlertaPersonalizada(
                `✅ ¡${productName} añadido al carrito exitosamente!`,
                'success'
            );
        });
        
        // Botón "Comprar Ahora"
        modal.querySelector('.modal-footer .btn-primary').addEventListener('click', function() {
            const productName = document.getElementById('modalProductName').textContent;
            const productPrice = document.getElementById('modalProductPrice').textContent;
            mostrarAlertaPersonalizada(
                `🛒 Proceso de compra iniciado para ${productName} (${productPrice})`,
                'info'
            );
        });
    }
    
    console.log('Script cargado correctamente - Página web interactiva completa');
});