<nav
  class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
  id="layout-navbar">
  <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
    <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
      <i class="ti ti-menu-2 ti-sm"></i>
    </a>
  </div>

  <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
    <div class="navbar-nav align-items-center">
      <a class="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);">
        <i class="ti ti-sm"></i>
      </a>
    </div>

    <ul class="navbar-nav flex-row align-items-center ms-auto">
      <!-- User -->
      <li class="nav-item navbar-dropdown dropdown-user dropdown">
        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
          <div class="avatar avatar-online">
          @if (Auth::guard('admin')->check() && !empty(Auth::guard('admin')->user()->image))
            <img src="{{ url('admin/images/photos/'.Auth::guard('admin')->user()->image) }}" alt class="h-auto rounded-circle" />
          @elseif (Auth::guard('vendor')->check() && !empty(Auth::guard('vendor')->user()->image))
            <img src="{{ url('vendor/images/photos/'.Auth::guard('vendor')->user()->image) }}" alt class="h-auto rounded-circle" />
          @else
            <img src="/admin/images/photos/default.png" alt class="h-auto rounded-circle" />
          @endif
          </div>
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
          <li>
            <a class="dropdown-item" href="#">
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                <div class="avatar avatar-online">
                @if (Auth::guard('admin')->check() && !empty(Auth::guard('admin')->user()->image))
                  <img src="{{ url('admin/images/photos/'.Auth::guard('admin')->user()->image) }}" alt class="h-auto rounded-circle" />
                @elseif (Auth::guard('vendor')->check() && !empty(Auth::guard('vendor')->user()->image))
                  <img src="{{ url('vendor/images/photos/'.Auth::guard('vendor')->user()->image) }}" alt class="h-auto rounded-circle" />
                @else
                  <img src="/admin/images/photos/default.png" alt class="h-auto rounded-circle" />
                @endif
                </div>
                </div>
                <div class="flex-grow-1">
                @if (Auth::guard('admin')->check())
                  <div class="flex-grow-1">
                      <span class="fw-semibold d-block">{{ Auth::guard('admin')->user()->firstname }} {{ Auth::guard('admin')->user()->lastname }}</span>
                      <small class="text-muted">{{ Auth::guard('admin')->user()->type }}</small>
                  </div>
                @elseif (Auth::guard('vendor')->check())
                  <div class="flex-grow-1">
                      <span class="fw-semibold d-block">{{ Auth::guard('vendor')->user()->firstname }} {{ Auth::guard('vendor')->user()->lastname }}</span>
                      <small class="text-muted">{{ Auth::guard('vendor')->user()->type }}</small>
                  </div>
                @endif
                </div>
              </div>
            </a>
          </li>
          <li>
            <div class="dropdown-divider"></div>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <i class="ti ti-user-check me-2 ti-sm"></i>
              <span class="align-middle">My Profile</span>
            </a>
          </li>
          <li>
              @if (Auth::guard('admin')->check())
                <a class="dropdown-item" href="{{ route('admin.account') }}">
              @elseif (Auth::guard('vendor')->check())
                <a class="dropdown-item" href="{{ route('vendor.account') }}">
              @endif
                <i class="ti ti-settings me-2 ti-sm"></i>
                <span class="align-middle">Ajustes</span>
              </a>
            </li>
          <li>
            <a class="dropdown-item" href="#">
              <span class="d-flex align-items-center align-middle">
                <i class="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i>
                <span class="flex-grow-1 align-middle">Billing</span>
                <span class="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20"
                  >2</span
                >
              </span>
            </a>
          </li>
          <li>
            <div class="dropdown-divider"></div>
          </li>
          <li>
            <a class="dropdown-item" href="{{ route('logout') }}">
              <i class="ti ti-logout me-2 ti-sm"></i>
              <span class="align-middle">Cerrar Sesión</span>
            </a>
          </li>
        </ul>
      </li>
      <!--/ User -->
    </ul>
  </div>
</nav>
