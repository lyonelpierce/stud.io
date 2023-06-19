@extends('admin.layout.layout')

@section('meta')
    Ajustes - Cuenta
@endsection

@section('content')
<div class="content-wrapper">
    <!-- Content -->

    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Ajustes /</span> Estudio</h4>
        <div class="row">
        <!-- User Sidebar -->
        <div class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
            <!-- User Card -->
            <div class="card mb-4">
            <div class="card-body">
                <div class="user-avatar-section">
                <div class="d-flex align-items-center flex-column">
                    @if (!empty($adminDetails['studio_logo']))
                        <img class="img-fluid rounded mb-3 pt-1 mt-4"
                            src="{{ url('vendor/images/logos/'.$adminDetails['studio_logo']) }}"
                            height="100"
                            width="100"
                            alt="User avatar">
                    @else
                        <img class="img-fluid rounded mb-3 pt-1 mt-4"
                            src="{{ url('admin/images/photos/default.png') }}"
                            height="100"
                            width="100"
                            alt="User avatar">
                    @endif                    <div class="user-info text-center">
                    <h4 class="mb-2">{{ $adminDetails['studio_name'] }}</h4>
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
                        <span class="fw-semibold me-1">Provincia:</span>
                        <span>{{ $adminDetails['studio_state'] }}</span>
                    </li>
                    <li class="mb-2 pt-1">
                        <span class="fw-semibold me-1">Ciudad:</span>
                        <span>{{ $adminDetails['studio_city'] }}</span>
                    </li>
                    <li class="mb-2 pt-1">
                        <span class="fw-semibold me-1">Dirección:</span>
                        <span>{{ $adminDetails['studio_address'] }}</span>
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
                <a class="nav-link active" href="javascript:void(0);">
                    <i class="ti ti-ballpen ti-xs me-1"></i>Estudio
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('vendor.bank') }}">
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
            <h5 class="card-header">Actualizar Información del Estudio</h5>
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
            <form id="newStudioForm" class="row g-3 mb-4" action="{{ url('vendor/studio') }}" method="post" enctype="multipart/form-data">@csrf
                    <div class="col-12">
                        <label class="form-label" for="studioName">Nombre</label>
                        <input
                        type="text"
                        id="studioName"
                        name="studioName"
                        class="form-control"
                        value="{{ $adminDetails['studio_name'] }}"
                        placeholder="John" />
                    </div>
                    <div class='col-12'>
                        <label class="form-label" for="studioDescription">Descripción (Opcional)</label>
                        <textarea class="form-control" id="studioDescription" name="studioDescription" rows="3"></textarea>
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label" for="studioState">Provincia</label>
                        <select
                        id="studioState"
                        name="studioState"
                        class="select2 form-select"
                        data-allow-clear="true">
                        <option value="" disabled>Seleccionar Provincia</option>
                        @foreach($states as $state)
                            <option value="{{ $state['name'] }}" @if($state['name'] == $adminDetails['studio_state']) selected @endif>{{ $state['name'] }}</option>
                        @endforeach
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label" for="studioCity">Ciudad</label>
                        <select
                        id="studioCity"
                        name="studioCity"
                        class="select2 form-select"
                        data-allow-clear="true">
                        <option value="" disabled>Seleccionar Ciudad</option>
                        @foreach($cities as $city)
                            <option value="{{ $city['name'] }}" @if($city['name'] == $adminDetails['studio_city']) selected @endif >{{ $city['name'] }}</option>
                        @endforeach
                        </select>
                    </div>
                    <div class="col-12">
                        <label class="form-label" for="studioAddress">Dirección</label>
                        <input
                        type="text"
                        id="studioAddress"
                        name="studioAddress"
                        class="form-control"
                        value="{{ $adminDetails['studio_address'] }}"
                        placeholder="Cdla. La Alborada..." />
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label" for="studioMobile">Teléfono</label>
                        <div class="input-group">
                            <span class="input-group-text">09</span>
                            <input
                            type="text"
                            id="studioMobile"
                            name="studioMobile"
                            value="{{ $adminDetails['studio_mobile'] }}"
                            class="form-control phone-number-mask"
                            placeholder="81234567" />
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label" for="studioRuc">RUC (Opcional)</label>
                        <div class="input-group">
                            <input
                            type="text"
                            id="studioRuc"
                            name="studioRuc"
                            value="{{ $adminDetails['studio_ruc'] }}"
                            class="form-control phone-number-mask"
                            placeholder="0912345678" />
                            <span class="input-group-text">001</span>
                        </div>
                    </div>
                    <div class="col-12">
                        <label class="form-label" for="studioWebsite">Website (Opcional)</label>
                        <input
                        type="text"
                        id="studioWebsite"
                        name="studioWebsite"
                        class="form-control"
                        value="{{ $adminDetails['studio_website'] }}"
                        placeholder="http://mistudio.com/" />
                    </div>
                    <div class="mb-3">
                        <label for="accountImage" class="form-label">Logo (jpg, jpeg, png)</label>
                        <input class="form-control" type="file" id="accountImage" name="accountImage"/>
                        @if(!empty(Auth::guard('vendor')->user()->image))
                            <input type="hidden" name="currentAdminImage" value="{{ Auth::guard('vendor')->user()->image }}">
                        @endif
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary mt-2 me-sm-3 me-1">Actualizar</button>
                    </div>
                </form>
                <!-- <form id="joinStudioForm" class="row g-3 mb-4" action="{{ url('vendor/joinstudio') }}" method="post">@csrf
                    <div class="col-12 mb-4">
                        <label for="TagifyUserList" class="form-label">Buscar Estudio</label>
                        <input
                        id="TagifyUserList"
                        name="TagifyUserList"
                        class="form-control"
                        value="abatisse2@nih.gov, Justinian Hattersley" />
                    </div>
                </form> -->
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
