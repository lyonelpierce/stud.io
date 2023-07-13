<!DOCTYPE html>

<html
  lang="en"
  class="light-style layout-navbar-fixed layout-menu-fixed"
  dir="ltr"
  data-theme="theme-default"
  data-assets-path="{{ secure_asset('admin/assets/') . '/' }}"
  data-template="vertical-menu-template-starter">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
      <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>@yield('meta') | Marketplace</title>

    <meta name="description" content="" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ secure_asset('/admin/assets/img/favicon/favicon.ico') }}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet" />

    <!-- Icons -->
    <link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/fonts/fontawesome.css') }}" />
    <link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/fonts/tabler-icons.css') }}" />
    <link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/fonts/flag-icons.css') }}" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/css/rtl/core.css') }}" class="template-customizer-core-css" />
    <link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/css/rtl/theme-default.css') }}" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="{{ secure_asset('/admin/assets/css/demo.css') }}" />
    <link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/libs/select2/select2.css') }}" />
    <link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/libs/tagify/tagify.css') }}" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}" />
    <link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/libs/node-waves/node-waves.css') }}" />
    @yield('css')

    <!-- Page CSS -->

    <!-- Helpers -->
    <script src="{{ secure_asset('/admin/assets/vendor/js/helpers.js') }}"></script>

    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  -->
    <script src="{{ secure_asset('/admin/assets/vendor/js/template-customizer.js') }}"></script>
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="{{ secure_asset('/admin/assets/js/config.js') }}"></script>
  </head>

  <body>
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <!-- Menu -->

        @include('admin.layout.sidebar')

        <!-- / Menu -->

        <!-- Layout container -->
        <div class="layout-page">

          <!-- Navbar -->
            @include('admin.layout.header')
          <!-- / Navbar -->

          <!-- Content wrapper -->
          <div class="content-wrapper">

            <!-- Content -->
                @yield('content')
            <!-- / Content -->

            <!-- Footer -->
                @include('admin.layout.footer')
            <!-- / Footer -->

            <div class="content-backdrop fade"></div>
          </div>
          <!-- Content wrapper -->
        </div>
        <!-- / Layout page -->
      </div>

      <!-- Overlay -->
      <div class="layout-overlay layout-menu-toggle"></div>

      <!-- Drag Target Area To SlideIn Menu On Small Screens -->
      <div class="drag-target"></div>
    </div>
    <!-- / Layout wrapper -->

    <!-- Core JS -->
    <!-- build:js assets/vendor/js/core.js -->
    <script src="{{ secure_asset('/admin/assets/vendor/libs/jquery/jquery.js') }}"></script>
    <script src="{{ secure_asset('/admin/assets/vendor/libs/popper/popper.js') }}"></script>
    <script src="{{ secure_asset('/admin/assets/vendor/js/bootstrap.js') }}"></script>
    <script src="{{ secure_asset('/admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
    <script src="{{ secure_asset('/admin/assets/vendor/libs/node-waves/node-waves.js') }}"></script>
    <script src="{{ secure_asset('/admin/assets/vendor/libs/select2/select2.js') }}"></script>

    <script src="{{ secure_asset('/admin/assets/vendor/libs/hammer/hammer.js') }}"></script>

    <script src="{{ secure_asset('/admin/assets/vendor/js/menu.js') }}"></script>
    <!-- endbuild -->

    <!-- Vendors JS -->
    @yield('js')
    <!-- Main JS -->
    <script src="{{ secure_asset('/admin/assets/js/main.js') }}"></script>

    <!-- Page JS -->
  </body>
</html>
