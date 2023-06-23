<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
    <a href="index.html" class="app-brand-link">
        <span class="app-brand-logo demo">
        <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
            fill="#7367F0" />
            <path
            opacity="0.06"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
            fill="#161616" />
            <path
            opacity="0.06"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
            fill="#161616" />
            <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
            fill="#7367F0" />
        </svg>
        </span>
        <span class="app-brand-text demo menu-text fw-bold">Stud.io</span>
    </a>

    <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
        <i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
        <i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
    </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
    <!-- Page -->
    @if (Auth::guard('admin')->check())
    <li class="menu-item{{ Request::routeIs('admin.dashboard') ? ' active' : '' }}">
        <a href="{{ route('admin.dashboard') }}" class="menu-link">
            <i class="menu-icon tf-icons ti ti-smart-home"></i>
            <div data-i18n="Dashboard">Tablero</div>
        </a>
    </li>
    <li class="menu-item{{ Request::routeIs('admin.categories') ? ' active' : '' }}">
        <a href="{{ route('admin.categories') }}" class="menu-link">
            <i class="menu-icon tf-icons ti ti-category"></i>
            <div data-i18n="Categories">Categorías</div>
        </a>
    </li>
    <li class="menu-item{{ Request::routeIs('admin.users.tattooers') ? ' active open' : '' }}">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons ti ti-user"></i>
            <div data-i18n="Users">Usuarios</div>
        </a>
        <ul class="menu-sub">
            <li class="menu-item{{ Request::routeIs('admin.users.tattooers') ? ' active' : '' }}">
                <a href="{{ route('admin.users.tattooers') }}" class="menu-link">
                    <div data-i18n="Tattooers">Tatuadores</div>
                </a>
            </li>
        </ul>
    </li>
    <li class="menu-item{{ Request::routeIs('admin.account') || Request::routeIs('admin.security') ? ' active open' : '' }}">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons ti ti-settings"></i>
            <div data-i18n="Settings">Ajustes</div>
        </a>
        <ul class="menu-sub">
            <li class="menu-item{{ Request::routeIs('admin.account') ? ' active' : '' }}">
                <a href="{{ route('admin.account') }}" class="menu-link">
                    <div data-i18n="Account">Cuenta</div>
                </a>
            </li>
            <li class="menu-item{{ Request::routeIs('admin.security') ? ' active' : '' }}">
                <a href="{{ route('admin.security') }}" class="menu-link">
                    <div data-i18n="Security">Seguridad</div>
                </a>
            </li>
        </ul>
    </li>
    @elseif (Auth::guard('vendor')->check())
        <li class="menu-item{{ Request::routeIs('vendor.dashboard') ? ' active' : '' }}">
            <a href="{{ route('vendor.dashboard') }}" class="menu-link">
                <i class="menu-icon tf-icons ti ti-smart-home"></i>
                <div data-i18n="Dashboard">Tablero</div>
            </a>
        </li>
        <li class="menu-item{{ Request::routeIs('vendor.account') || Request::routeIs('vendor.bank') || Request::routeIs('vendor.studio') || Request::routeIs('vendor.security') ? ' active open' : '' }}">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons ti ti-settings"></i>
            <div data-i18n="Settings">Ajustes</div>
        </a>
        <ul class="menu-sub">
            <li class="menu-item{{ Request::routeIs('vendor.account') ? ' active' : '' }}">
                <a href="{{ route('vendor.account') }}" class="menu-link">
                    <div data-i18n="Account">Cuenta</div>
                </a>
            </li>
            <li class="menu-item{{ Request::routeIs('vendor.studio') ? ' active' : '' }}">
                <a href="{{ route('vendor.studio') }}" class="menu-link">
                    <div data-i18n="Studio">Estudio</div>
                </a>
            </li>
            <li class="menu-item{{ Request::routeIs('vendor.bank') ? ' active' : '' }}">
                <a href="{{ route('vendor.bank') }}" class="menu-link">
                    <div data-i18n="Bank">Banco</div>
                </a>
            </li>
            <li class="menu-item{{ Request::routeIs('vendor.security') ? ' active' : '' }}">
                <a href="{{ route('vendor.security') }}" class="menu-link">
                    <div data-i18n="Security">Seguridad</div>
                </a>
            </li>
        </ul>
    </li>
    @endif
    </ul>
</aside>