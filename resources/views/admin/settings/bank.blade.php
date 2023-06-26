@extends('admin.layout.layout')

@section('meta')
    Ajustes - Banco
@endsection

@section('content')
<div class="content-wrapper">
    <!-- Content -->

    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Ajustes /</span> Banco</h4>
        <div class="row">
        <!-- User Sidebar -->
        <div class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
            <!-- User Card -->
            <div class="card mb-4">
            <div class="card-body">
                <div class="user-avatar-section">
                <div class="d-flex align-items-center flex-column">
                    <i class="ti ti-building-bank avatar-icon mt-4 mb-3 pt-1 fs-1"></i>
                    <div class="user-info text-center">
                    <h4 class="mb-2">{{ $adminDetails['bank_name'] }}</h4>
                    <span class="badge bg-label-success mt-1">{{ $adminDetails['bank_account_type'] }}</span>
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
                        <span class="fw-semibold me-1">Beneficiario:</span>
                        <span>{{ $adminDetails['bank_account_name']}}</span>
                    </li>
                    <li class="mb-2 pt-1">
                        <span class="fw-semibold me-1">Número de Cuenta:</span>
                        <span>{{ $adminDetails['bank_account_number']}}</span>
                    </li>
                    <li class="mb-2 pt-1">
                        <span class="fw-semibold me-1">Número de Cedula:</span>
                        <span>{{ $adminDetails['bank_account_document']}}</span>
                    </li>
                </ul>
                <!-- <div class="d-flex justify-content-center">
                    <a href="javascript:;" class="btn btn-label-danger suspend-user">Eliminar Cuenta</a>
                </div> -->
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
                <a class="nav-link" href="{{ route('vendor.account') }}">
                    <i class="ti ti-user-check ti-xs me-1"></i>Cuenta
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('vendor.store') }}">
                    <i class="ti ti-ballpen ti-xs me-1"></i>Tienda
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0);">
                    <i class="ti ti-building-bank ti-xs me-1"></i>Banco
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('vendor.security') }}">
                    <i class="ti ti-lock ti-xs me-1"></i>Seguridad
                </a>
            </li>
            </ul>
            <!--/ User Pills -->

            <!-- Activity Timeline -->
            <div class="card mb-4">
            <h5 class="card-header">Actualizar Información Bancaria</h5>
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
                <form id="editUserForm" class="row g-3 mb-4" action="{{ route('vendor.bank') }}" method="post" enctype="multipart/form-data">@csrf
                    <div class="col-12 col-md-6">
                        <label class="form-label" for="bankName">Entidad Bancaria</label>
                        <select id="bankName" name="bankName" class="select2 form-select" data-allow-clear="true">
                            <option value="" disabled>Seleccionar Banco</option>
                            <option value="Banco Pacifico" {{ $adminDetails['bank_name'] == 'Banco Pacifico' ? 'selected' : '' }}>Banco Pacifico</option>
                            <option value="Banco Guayaquil" {{ $adminDetails['bank_name'] == 'Banco Guayaquil' ? 'selected' : '' }}>Banco Guayaquil</option>
                            <option value="Banco Pichincha" {{ $adminDetails['bank_name'] == 'Banco Pichincha' ? 'selected' : '' }}>Banco Pichincha</option>
                            <option value="Banco Bolivariano" {{ $adminDetails['bank_name'] == 'Banco Bolivariano' ? 'selected' : '' }}>Banco Bolivariano</option>
                            <option value="Banco Internacional" {{ $adminDetails['bank_name'] == 'Banco Internacional' ? 'selected' : '' }}>Banco Internacional</option>
                            <option value="Produbanco" {{ $adminDetails['bank_name'] == 'Produbanco' ? 'selected' : '' }}>Produbanco</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label" for="bankAccountType">Tipo de Cuenta</label>
                        <select
                        id="bankAccountType"
                        name="bankAccountType"
                        class="select2 form-select"
                        data-allow-clear="true">
                            <option value="" disabled>Seleccionar Tipo de Cuenta</option>
                            <option value="Ahorros" {{ $adminDetails['bank_account_type'] == 'Ahorros' ? 'selected' : '' }}>Ahorros</option>
                            <option value="Corriente" {{ $adminDetails['bank_account_type'] == 'Corriente' ? 'selected' : ''}}>Corriente</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label class="form-label" for="bankAccountName">Nombre del Beneficiario</label>
                        <input
                        type="text"
                        id="bankAccountName"
                        name="bankAccountName"
                        class="form-control"
                        value="{{ $adminDetails['bank_account_name'] }}"
                        placeholder="Doe" />
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label" for="bankAccountNumber">Número de Cuenta</label>
                        <input
                        type="text"
                        id="bankAccountNumber"
                        name="bankAccountNumber"
                        value="{{ $adminDetails['bank_account_number'] }}"
                        class="form-control phone-number-mask"
                        placeholder="8 123 4567" />
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label" for="bankDocumentNumber">Número de Cedula</label>
                        <input
                        type="text"
                        id="bankDocumentNumber"
                        name="bankDocumentNumber"
                        value="{{ $adminDetails['bank_account_document'] }}"
                        class="form-control phone-number-mask"
                        placeholder="8 123 4567" />
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary mt-2 me-sm-3 me-1">Actualizar</button>
                    </div>
                </form>
            </div>
            </div>
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
