{/* <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GreenPal - Professional Lawn Care Services</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #28a745;
            --secondary: #ff7a01;
            --light: #f8f9fa;
            --dark: #343a40;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .navbar {
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .navbar-brand {
            font-weight: 700;
            color: var(--primary) !important;
        }
        
        .hero-section {
            background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80');
            background-size: cover;
            background-position: center;
            min-height: 90vh;
            padding: 2rem 1rem;
        }
        
        .btn-primary {
            background-color: var(--primary);
            border-color: var(--primary);
        }
        
        .btn-secondary {
            background-color: var(--secondary);
            border-color: var(--secondary);
        }
        
        .btn-outline-primary {
            color: var(--primary);
            border-color: var(--primary);
        }
        
        .btn-outline-primary:hover {
            background-color: var(--primary);
            color: white;
        }
        
        .service-card {
            transition: transform 0.3s;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }
        
        .service-card:hover {
            transform: translateY(-5px);
        }
        
        .provider-card {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            transition: transform 0.3s;
        }
        
        .provider-card:hover {
            transform: translateY(-3px);
        }
        
        .search-section {
            background-color: #f0f8f0;
        }
        
        .how-it-works-section {
            background-color: var(--light);
        }
        
        .step-card {
            border-radius: 12px;
            padding: 2rem;
            height: 100%;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }
        
        .step-number {
            width: 50px;
            height: 50px;
            background-color: var(--primary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        
        footer {
            background-color: var(--dark);
        }
        
        .form-control:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 0.25rem rgba(40, 167, 69, 0.25);
        }
        
        .rating {
            color: #ffc107;
        }
        
        @media (max-width: 768px) {
            .hero-section {
                min-height: 70vh;
            }
            
            .display-4 {
                font-size: 2.5rem;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#">GREENPAL</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#how-it-works">How It Works</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#providers">Find Providers</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-outline-primary ms-2" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-primary ms-2" href="#">Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 text-white">
                    <h1 class="display-4 fw-bold mb-4">Professional Lawn Care Services in Columbus</h1>
                    <p class="lead mb-4">Fast, Easy, & Free Quotes</p>
                    <p class="mb-4">Book your grass cutting in 60 seconds</p>
                    
                    <div class="row g-3 align-items-center mb-4">
                        <div class="col-md-7">
                            <input type="text" class="form-control form-control-lg rounded-pill" placeholder="Enter your house address">
                        </div>
                        <div class="col-md-5">
                            <button class="btn btn-secondary btn-lg rounded-pill w-100">See Prices <i class="fas fa-arrow-right ms-2"></i></button>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-3 p-4 text-dark">
                        <h5 class="fw-bold mb-3">Get a free instant quote</h5>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" checked id="lawnCareCheck">
                                <label class="form-check-label fw-bold" for="lawnCareCheck">
                                    Green Lawn Care
                                </label>
                            </div>
                            <div>
                                <span class="rating">★★★★★</span>
                                <span class="text-muted ms-1">4.8/5 (109 Reviews)</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="fw-bold">Avg. Price: $75 per cut</span>
                            <button class="btn btn-outline-primary btn-sm rounded-pill">See Price</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="how-it-works-section py-5">
        <div class="container py-5">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold">How It Works</h2>
                <p class="lead">Fast, Easy, & Free Quotes</p>
            </div>
            
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="step-card text-center">
                        <div class="step-number mx-auto">1</div>
                        <h4>Enter Your Address</h4>
                        <p>Tell us where you need lawn care services</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="step-card text-center">
                        <div class="step-number mx-auto">2</div>
                        <h4>Get Instant Quotes</h4>
                        <p>Receive free quotes from local lawn care professionals</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="step-card text-center">
                        <div class="step-number mx-auto">3</div>
                        <h4>Choose a Pro</h4>
                        <p>Select the best professional for your needs and budget</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Search Section -->
    <section id="providers" class="search-section py-5">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="text-center mb-5">
                        <h2 class="fw-bold">Find Lawn Care Professionals</h2>
                        <p class="text-muted">Search by Name or Zip Code</p>
                    </div>
                    
                    <div class="card rounded-3 shadow-sm">
                        <div class="card-body p-4">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-lg rounded-pill" placeholder="Search by name or zip code">
                                <button class="btn btn-secondary rounded-pill ms-2 px-4">Search</button>
                            </div>
                            
                            <div class="text-center mt-4">
                                <h4>4 lawn pros found near you</h4>
                            </div>
                            
                            <div class="row mt-4">
                                <div class="col-md-6 mb-4">
                                    <div class="provider-card card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Green Lawn Care</h5>
                                            <p class="text-muted">Nashville, TN 37220</p>
                                            <p class="card-text">Serving 22 homes near you</p>
                                            <p class="card-text"><i>"I love Mercury Greens they provide excellent service."</i></p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="badge bg-success">Verified by GreenPal</span>
                                                <button class="btn btn-primary btn-sm rounded-pill">Get Instant Price</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="provider-card card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Premium Lawn Services</h5>
                                            <p class="text-muted">Nashville, TN 37220</p>
                                            <p class="card-text">Serving 18 homes near you</p>
                                            <p class="card-text"><i>"Reliable and professional service every time."</i></p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="badge bg-success">Verified by GreenPal</span>
                                                <button class="btn btn-primary btn-sm rounded-pill">Get Instant Price</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-5">
        <div class="container py-5">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold">Our Services</h2>
                <p class="lead">Professional lawn care services tailored to your needs</p>
            </div>
            
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="service-card card h-100">
                        <img src="https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="card-img-top" alt="Lawn Mowing">
                        <div class="card-body">
                            <h5 class="card-title">Lawn Mowing</h5>
                            <p class="card-text">Professional lawn mowing services to keep your yard looking pristine and well-maintained.</p>
                            <a href="#" class="btn btn-outline-primary rounded-pill">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-card card h-100">
                        <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="card-img-top" alt="Landscaping">
                        <div class="card-body">
                            <h5 class="card-title">Landscaping</h5>
                            <p class="card-text">Complete landscaping solutions to transform your outdoor space into a beautiful oasis.</p>
                            <a href="#" class="btn btn-outline-primary rounded-pill">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-card card h-100">
                        <img src="https://images.unsplash.com/photo-1614285167927-1337168e2935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="card-img-top" alt="Fertilization">
                        <div class="card-body">
                            <h5 class="card-title">Fertilization</h5>
                            <p class="card-text">Expert fertilization treatments to promote healthy growth and vibrant green grass.</p>
                            <a href="#" class="btn btn-outline-primary rounded-pill">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="text-white py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <h4 class="fw-bold">GREENPAL</h4>
                    <p>Professional lawn care services at your fingertips.</p>
                </div>
                <div class="col-lg-2 mb-4">
                    <h5>Services</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white text-decoration-none">Lawn Mowing</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Landscaping</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Fertilization</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Weed Control</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 mb-4">
                    <h5>Company</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white text-decoration-none">About Us</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Careers</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Contact</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Blog</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 mb-4">
                    <h5>Subscribe to Our Newsletter</h5>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Your email">
                        <button class="btn btn-primary">Subscribe</button>
                    </div>
                    <div class="d-flex gap-3">
                        <a href="#" class="text-white"><i class="fab fa-facebook fa-lg"></i></a>
                        <a href="#" class="text-white"><i class="fab fa-twitter fa-lg"></i></a>
                        <a href="#" class="text-white"><i class="fab fa-instagram fa-lg"></i></a>
                    </div>
                </div>
            </div>
            <hr>
            <div class="text-center">
                <p class="mb-0">© 2023 GreenPal. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html> */}