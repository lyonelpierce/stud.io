@extends('admin.layout.layout')

@section('meta')
    Ajustes - Seguridad
@endsection

@section('content')
<div class="content-wrapper">
    <!-- Content -->

    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Ajustes /</span> Seguridad</h4>
        <div class="row">
        <!-- User Sidebar -->
        <div class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
            <!-- User Card -->
            <div class="card mb-4">
            <div class="card-body">
                <div class="user-avatar-section">
                <div class="d-flex align-items-center flex-column">
                    
                    @if (!empty($adminDetails['image']))
                        <img class="img-fluid rounded mb-3 pt-1 mt-4"
                            src="{{ url('admin/images/photos/'.$adminDetails['image']) }}"
                            height="100"
                            width="100"
                            alt="User avatar">
                    @else
                        <img class="img-fluid rounded mb-3 pt-1 mt-4"
                            src="{{ url('admin/images/photos/default.png') }}"
                            height="100"
                            width="100"
                            alt="User avatar">
                    @endif

                    <div class="user-info text-center">
                    <h4 class="mb-2">{{ $adminDetails['firstname']. ' ' .$adminDetails['lastname'] }}</h4>
                    <span class="badge bg-label-success mt-1">{{ $adminDetails['type'] }}</span>
                    </div>
                </div>
                </div>
                <div class="d-flex justify-content-around flex-wrap mt-3 pt-2 pb-3 border-bottom">
                <!-- <div class="d-flex align-items-start me-4 mt-3 gap-2">
                    <span class="badge bg-label-primary p-2 rounded"><i class="ti ti-checkbox ti-sm"></i></span>
                    <div>
                    <p class="mb-0 fw-semibold">1.23k</p>
                    <small>Tasks Done</small>
                    </div>
                </div>
                <div class="d-flex align-items-start mt-3 gap-2">
                    <span class="badge bg-label-primary p-2 rounded"><i class="ti ti-briefcase ti-sm"></i></span>
                    <div>
                    <p class="mb-0 fw-semibold">568</p>
                    <small>Projects Done</small>
                    </div>
                </div> -->
                </div>
                <p class="mt-4 small text-uppercase text-muted">Información</p>
                <div class="info-container">
                <ul class="list-unstyled">
                    <li class="mb-2 pt-1">
                        <span class="fw-semibold me-1">Email:</span>
                        <span>{{ $adminDetails['email'] }}</span>
                    </li>
                    <li class="mb-2 pt-1">
                        <span class="fw-semibold me-1">Teléfono:</span>
                        <span>09-{{ $adminDetails['mobile']}}</span>
                    </li>
                    <li class="mb-2 pt-1">
                        <span class="fw-semibold me-1">Provincia:</span>
                        <span>{{ $adminDetails['state']}}</span>
                    </li>
                    <li class="mb-2 pt-1">
                        <span class="fw-semibold me-1">Ciudad:</span>
                        <span>{{ $adminDetails['city']}}</span>
                    </li>
                    <li class="pt-1">
                        <span class="fw-semibold me-1">Dirección:</span>
                        <span>{{ $adminDetails['address']}}</span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <!-- /User Card -->
        </div>
        <!--/ User Sidebar -->

        <!-- User Content -->
        <div class="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
            <!-- User Pills -->
            <ul class="nav nav-pills flex-column flex-md-row mb-4">
            <li class="nav-item">
                <a class="nav-link" href="/admin/account"
                ><i class="ti ti-user-check ti-xs me-1"></i>Cuenta</a
                >
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0);"
                ><i class="ti ti-lock ti-xs me-1"></i>Seguridad</a
                >
            </li>
            </ul>
            <!--/ User Pills -->

            <!-- Activity Timeline -->
            <div class="card mb-4">
            <h5 class="card-header">Actualizar Contraseña</h5>
            <div class="card-body pb-0">
                @if(Session::has('success_message'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ Session::get('success_message') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                @endif
                @if(Session::has('error_message'))
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                {{ Session::get('error_message') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                @endif
                @if($errors->any())
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                @foreach($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                @endif
                <form id="editUserForm" class="row g-3 mb-4" action="{{ url('admin/security') }}" method="post" enctype="multipart/form-data">@csrf
                    <div>
                    <div class="col-12 col-md-6">
                    <label class="form-label" for="accountCurrentPassword">Contraseña Actual</label>
                        <input
                        type="password"
                        id="accountCurrentPassword"
                        name="accountCurrentPassword"
                        class="form-control" 
                        placeholder="Contraseña actual"/>
                    </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label" for="accountNewPassword">Nueva Contraseña</label>
                        <input
                        type="password"
                        id="accountNewPassword"
                        name="accountNewPassword"
                        class="form-control" 
                        placeholder="Nueva Contraseña" />
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label" for="accountConfirmPassword">Confirmar Contraseña</label>
                        <input
                        type="password"
                        id="accountConfirmPassword"
                        name="accountConfirmPassword"
                        class="form-control" 
                        placeholder="Confirmar Contraseña"/>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary mt-2 me-sm-3 me-1">Actualizar</button>
                    </div>
                </form>
                
            </div>
        </div>
        <!-- <div class="card mb-4">
            <h5 class="card-header">Eliminar Cuenta</h5>
            <div class="card-body pb-0">
                <p>Los datos de tu cuenta seran eliminados de forma permanente y no podran ser recuperados.</p>
                <div class="d-flex mb-4">
                    <a href="javascript:;" class="btn btn-label-danger suspend-user">Eliminar Cuenta</a>
                </div>
            </div>
        </div> -->
            <!-- /Activity Timeline -->

        </div>
        <!--/ User Content -->
        </div>

    </div>
    <!-- / Content -->

    <div class="content-backdrop fade"></div>
</div>

<script src="{{ url('/admin/assets/customjs/settingsAccount.js') }}"></script>
@endsection
