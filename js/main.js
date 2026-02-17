 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	// Enhanced Stellar Parallax
	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	// Enhanced Full Height Function
	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();

	// Enhanced Loader with Progress
	var loader = function() {
		var progress = 0;
		var interval = setInterval(function() {
			progress += Math.random() * 30;
			if (progress >= 100) {
				progress = 100;
				clearInterval(interval);
			}
			
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader .path').css('stroke-dasharray', progress + ' 100');
			}
			
			if (progress >= 100) {
				setTimeout(function() {
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
					}
				}, 500);
			}
		}, 100);
	};
	loader();

	// Enhanced Scrollax
   $.Scrollax();

   // Enhanced Burger Menu with Animation
	var burgerMenu = function() {
		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			event.preventDefault();

			var $this = $(this);
			var $nav = $('#ftco-nav');
			
			if ($nav.is(':visible')) {
				$this.removeClass('active');
				$nav.slideUp(300);
			} else {
				$this.addClass('active');
				$nav.slideDown(300);
			}
		});
	};
	burgerMenu();

	// Enhanced One Page Click with Smooth Scrolling
	var onePageClick = function() {
		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();
	    var href = $.attr(this, 'href');
	    
	    // Add active class to clicked nav item
	    $('#ftco-nav .nav-item').removeClass('active');
	    $(this).parent().addClass('active');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 800, 'easeInOutQuart', function() {
	    	// Update URL hash
	    	window.location.hash = href;
	    });
		});
	};
	onePageClick();
	
	// Enhanced Carousel with Better Controls
	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop: true,
	    autoplay: true,
	    margin: 0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav: true,
	    autoplayHoverPause: true,
	    autoplayTimeout: 5000,
	    autoplaySpeed: 1000,
	    items: 1,
	    navText: [
	    	"<span class='ion-md-arrow-back'></span>",
	    	"<span class='ion-chevron-right'></span>"
	    ],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	// Enhanced Dropdown Hover
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});

	// Enhanced Scroll Window with Better Performance
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			// Enhanced scroll effects
			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
			
			// Enhanced parallax effect for hero section
			if (st > 0) {
				$('.hero').css('transform', 'translateY(' + (st * 0.5) + 'px)');
			}
		});
	};
	scrollWindow();

	// Enhanced Counter with Better Animation
	var counter = function() {
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function(direction) {
			if(direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber({
					    number: num,
					    numberStep: comma_separator_number_step
					}, 3000, 'easeOutQuart');
				});
			}
		}, { offset: '95%' });
	};
	counter();

	// Enhanced Content Way Point with Staggered Animation
	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint(function(direction) {
			if(direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 100, 'easeInOutExpo');
					});
				}, 100);
			}
		}, { offset: '95%' });
	};
	contentWayPoint();

	// Enhanced Magnific Popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  // Enhanced Skill Progress Animation
  var skillProgress = function() {
    $('.skill-mf .progress').waypoint(function(direction) {
      if(direction === 'down' && !$(this.element).hasClass('animated')) {
        $(this.element).addClass('animated');
        $(this.element).find('.progress-bar').each(function() {
          var $this = $(this);
          var width = $this.attr('aria-valuenow');
          $this.css('width', '0%');
          setTimeout(function() {
            $this.css('transition', 'width 2s ease-in-out');
            $this.css('width', width + '%');
          }, 500);
        });
      }
    }, { offset: '90%' });
  };
  skillProgress();

  // Enhanced Project Card Interactions
  var projectInteractions = function() {
    $('.blog-entry').hover(
      function() {
        $(this).find('.block-20').css('transform', 'scale(1.1)');
      },
      function() {
        $(this).find('.block-20').css('transform', 'scale(1)');
      }
    );
  };
  projectInteractions();

  // Enhanced Contact Form Validation
  var contactFormValidation = function() {
    $('.contact-form').on('submit', function(e) {
      var $form = $(this);
      var $submitBtn = $form.find('button[type="submit"]');
      var originalText = $submitBtn.find('.btn-text').text();
      
      // Show loading state
      $submitBtn.find('.btn-text').text('Sending...');
      $submitBtn.find('.loading-spinner').show();
      $submitBtn.prop('disabled', true);
      
      // Let the form submit to Formspree
      // Formspree will handle the email sending
      // We'll show success message after submission
      setTimeout(function() {
        $submitBtn.find('.btn-text').text('Message Sent!');
        $submitBtn.find('.loading-spinner').hide();
        $submitBtn.addClass('btn-success');
        
        // Reset form after showing success
        setTimeout(function() {
          $submitBtn.find('.btn-text').text(originalText);
          $submitBtn.removeClass('btn-success').prop('disabled', false);
          $form[0].reset();
        }, 3000);
      }, 2000);
    });
  };
  contactFormValidation();

  // Enhanced Scroll to Top Button
  var scrollToTop = function() {
    var $scrollBtn = $('<button class="scroll-to-top"><span class="ion-ios-arrow-up"></span></button>');
    $('body').append($scrollBtn);
    
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        $scrollBtn.addClass('show');
      } else {
        $scrollBtn.removeClass('show');
      }
    });
    
    $scrollBtn.on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800, 'easeInOutQuart');
    });
  };
  scrollToTop();

  // Enhanced Typing Animation Speed Control
  var typingSpeedControl = function() {
    var $typingElement = $('#typing-animation');
    if ($typingElement.length) {
      // Pause typing on hover
      $typingElement.parent().hover(
        function() {
          $typingElement.addClass('paused');
        },
        function() {
          $typingElement.removeClass('paused');
        }
      );
    }
  };
  typingSpeedControl();

  // Enhanced Mobile Menu
  var mobileMenu = function() {
    $('.navbar-nav .nav-link').on('click', function() {
      if ($(window).width() < 992) {
        $('.navbar-collapse').collapse('hide');
        $('.js-fh5co-nav-toggle').removeClass('active');
      }
    });
  };
  mobileMenu();

  // Enhanced Image Lazy Loading
  var lazyLoading = function() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  };
  lazyLoading();

  // Enhanced Smooth Scrolling for All Links
  var smoothScrolling = function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 70
          }, 800, 'easeInOutQuart');
          return false;
        }
      }
    });
  };
  smoothScrolling();

  // Enhanced Particle Effect (Optional)
  var particleEffect = function() {
    if ($('#particles-js').length) {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#ffbd39'
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.5,
            random: false
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffbd39',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  };
  particleEffect();

  // Enhanced Loading Performance
  $(window).on('load', function() {
    // Hide loader after page is fully loaded
    setTimeout(function() {
      $('#ftco-loader').fadeOut(500);
    }, 1000);
    
    // Initialize all enhanced functions
    skillProgress();
    projectInteractions();
    contactFormValidation();
    scrollToTop();
    typingSpeedControl();
    mobileMenu();
    lazyLoading();
    smoothScrolling();
    particleEffect();
    darkModeToggle();
  });

  // Dark Mode Toggle Functionality
  var darkModeToggle = function() {
    var $themeToggle = $('#theme-toggle');
    var $icon = $themeToggle.find('.icon-sun');
    
    // Check for saved theme preference or default to light mode
    var currentTheme = localStorage.getItem('theme') || 'light';
    $('html').attr('data-theme', currentTheme);
    
    // Update icon based on current theme
    if (currentTheme === 'dark') {
      $icon.removeClass('icon-sun').addClass('icon-moon');
    }
    
    $themeToggle.on('click', function() {
      var currentTheme = $('html').attr('data-theme');
      var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Update theme
      $('html').attr('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Update icon with animation
      $icon.fadeOut(200, function() {
        if (newTheme === 'dark') {
          $icon.removeClass('icon-sun').addClass('icon-moon');
        } else {
          $icon.removeClass('icon-moon').addClass('icon-sun');
        }
        $icon.fadeIn(200);
      });
      
      // Add floating animation to toggle button
      $themeToggle.addClass('floating');
      setTimeout(function() {
        $themeToggle.removeClass('floating');
      }, 1000);
    });
  };

})(jQuery);

