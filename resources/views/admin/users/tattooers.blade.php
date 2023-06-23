@extends('admin.layout.layout')

@section('meta')
    Usuarios - Tatuadores
@endsection

@section('css')
<link rel="stylesheet" href="{{ url('/admin/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css') }}" />
<link rel="stylesheet" href="{{ url('/admin/assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css') }}" />
<link rel="stylesheet" href="{{ url('/admin/assets/vendor/libs/animate-css/animate.css') }}" />
<link rel="stylesheet" href="{{ url('/admin/assets/vendor/libs/sweetalert2/sweetalert2.css') }}" />
@endsection

@section('content')

<div class="content-wrapper">
    <!-- Content -->

    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Usuarios /</span> Tatuadores</h4>

        <!-- DataTable with Buttons -->
        <div class="card">
            <div class="card-datatable table-responsive pt-0">
            <div class="head-label pt-4 ps-3 pb-3">
                <h5 class="card-title mb-0">Lista de Tatuadores</h5>
            </div>
            @if(Session::has('success_message'))
            <div class="alert alert-success alert-dismissible fade show ps-3 pe-3" role="alert">
              {{ Session::get('success_message') }}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            @endif
            @if(Session::has('error_message'))
            <div class="alert alert-danger alert-dismissible fade show ps-3 pe-3" role="alert">
              {{ Session::get('error_message') }}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            @endif
            <table id="usersTable" class="datatables-basic table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Cedula</th>
                    <th>Estudio</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($tattooers as $tattooer)
                <tr>
                    <td>{{ $tattooer['id'] }}</td>
                    <td>
                        <div class="d-flex justify-content-start align-items-center user-name">
                            <div class="avatar-wrapper">
                                <div class="avatar me-2">
                                    @if($tattooer['image'])
                                        <img src="{{ url('vendor/images/photos/'.$tattooer['image']) }}" alt="Avatar" class="rounded-circle">
                                    @else
                                        <img src="{{ url('admin/images/photos/default.png') }}" alt="Avatar" class="rounded-circle">
                                    @endif
                                </div>
                            </div>
                            <div class="d-flex flex-column">
                                <span class="emp_name text-truncate">{{ $tattooer['firstname'] }} {{ $tattooer['lastname'] }}</span>
                                <small class="emp_post text-truncate text-muted">{{ $tattooer['state'] }} -> {{ $tattooer['city'] }} -> {{ $tattooer['address'] }}</small>
                        </div>
                    </div>
                    </td>
                    <td>{{ $tattooer['email'] }}</td>
                    <td>{{ $tattooer['document'] }}</td>
                    <td>{{ $tattooer['vendor_business_details']['studio_name'] }}</td>
                    <td>
                        <label class="switch">
                        <input type="checkbox" class="switch-input" userId="{{ $tattooer['id'] }}" {{ $tattooer['status'] === 1 ? 'checked' : '' }}>
                            <span class="switch-toggle-slider">
                                <span class="switch-on"></span>
                                <span class="switch-off"></span>
                            </span>
                        </label>
                    </td>
                    <td>
                        <a href="javascript:;" class="btn-sm btn-item item-edit" data-bs-toggle="modal" data-bs-target="#user-{{ $tattooer['id'] }}Info">
                            <i class="text-primary ti ti-search me-2"></i>
                        </a>
                        <a href="javascript:;" class="btn-sm btn-item item-delete" userId="{{ $tattooer['id'] }}">
                            <i class="ti ti-trash text-danger"></i>
                        </a>
                    </td>
                    <!-- User Info Modal -->
                    <div class="modal fade" id="user-{{ $tattooer['id'] }}Info" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-xl modal-simple modal-pricing">
                        <div class="modal-content p-2 p-md-5">
                            <div class="modal-body">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                            <div class=" rounded-top">
                                <div class="row mx-0 gy-3">

                                <!-- User Info -->
                                <div class="col-xl mb-md-0 mb-4">
                                    <div class="card border rounded shadow-none">
                                    <div class="card-body">
                                        <div class="my-3 pt-2 text-center">
                                        <img
                                            class="rounded-circle"
                                            src="{{ $tattooer['image'] ? url('vendor/images/photos/'.$tattooer['image']) : url('admin/images/photos/default.png') }}"
                                            alt="User Image"
                                            height="140" />
                                        </div>
                                        <h4 class="card-title fw-semibold text-center text-capitalize mb-1">{{ $tattooer['firstname'] }} {{ $tattooer['lastname'] }}</h4>
                                        <p class="text-center">Información Personal</p>
                                        <div class="mb-3 border-bottom"></div>
                                        <ul class="list-unstyled">
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Cedula:</span>
                                                <span>{{ $tattooer['document'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Email:</span>
                                                <span>{{ $tattooer['email'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Teléfono:</span>
                                                <span>09-{{ $tattooer['mobile'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Provincia:</span>
                                                <span>{{ $tattooer['state'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Ciudad:</span>
                                                <span>{{ $tattooer['city'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Dirección:</span>
                                                <span>{{ $tattooer['address'] }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>

                                <!-- Studio Info -->
                                <div class="col-xl mb-md-0 mb-4">
                                    <div class="card border rounded shadow-none">
                                    <div class="card-body">
                                        <div class="my-3 pt-2 text-center">
                                        <img
                                            class="rounded-circle"
                                            src="{{ $tattooer['vendor_business_details']['studio_logo'] ? url('vendor/images/logos/'.$tattooer['vendor_business_details']['stduio_logo']) : url('admin/images/photos/default.png') }}"
                                            alt="User Image"
                                            height="140" />
                                        </div>
                                        <h4 class="card-title fw-semibold text-center text-capitalize mb-1">{{ $tattooer['vendor_business_details']['studio_name'] }}</h4>
                                        <p class="text-center">Información del Studio</p>
                                        <div class="mb-3 border-bottom"></div>
                                        <ul class="list-unstyled">
                                            @if($tattooer['vendor_business_details']['studio_ruc'])
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">RUC:</span>
                                                <span>{{ $tattooer['vendor_business_details']['studio_ruc'] }}</span>
                                            </li>
                                            @endif
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Provincia:</span>
                                                <span>{{ $tattooer['vendor_business_details']['studio_state'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Ciudad:</span>
                                                <span>{{ $tattooer['vendor_business_details']['studio_city']  }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Dirección:</span>
                                                <span>{{ $tattooer['vendor_business_details']['studio_address'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Teléfono:</span>
                                                <span>09-{{ $tattooer['vendor_business_details']['studio_mobile'] }}</span>
                                            </li>
                                            @if($tattooer['vendor_business_details']['studio_website'])
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Website:</span>
                                                <span>{{ $tattooer['vendor_business_details']['studio_website'] }}</span>
                                            </li>
                                            @endif
                                        </ul>
                                    </div>
                                    </div>
                                </div>

                                <!-- Bank Info -->
                                <div class="col-xl mb-md-0 mb-4">
                                    <div class="card border rounded shadow-none">
                                    <div class="card-body">
                                        <div class="my-3 pt-2 text-center">
                                        <i class="ti ti-building-bank avatar-icon mt-4 mb-3 pt-1 fs-1"></i>

                                        </div>
                                        <h4 class="card-title fw-semibold text-center text-capitalize mb-1">{{ $tattooer['vendor_bank_details']['bank_name'] }}</h4>
                                        <p class="text-center">Información Bancaria</p>
                                        <div class="mb-3 border-bottom"></div>
                                        <ul class="list-unstyled">
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Beneficiario:</span>
                                                <span>{{ $tattooer['vendor_bank_details']['bank_account_name'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Tipo de Cuenta:</span>
                                                <span>{{ $tattooer['vendor_bank_details']['bank_account_type'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Número de Cuenta:</span>
                                                <span>{{ $tattooer['vendor_bank_details']['bank_account_number'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Número de Cedula</span>
                                                <span>{{ $tattooer['vendor_bank_details']['bank_account_document']  }}</span>
                                            </li>

                                        </ul>
                                    </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <!--/ User Info Modal -->
                @endforeach
                </tr>
            </tbody>
            </table>
        </div>
        </div>
        <!--/ DataTable with Buttons -->

    </div>
    <!-- / Content -->

    <div class="content-backdrop fade"></div>
</div>

@endsection

@section('js')
<script src="{{ url('/admin/assets/customjs/settingsAccount.js') }}"></script>
<script src="{{ url('/admin/assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js') }}"></script>
<script src="{{ url('/admin/assets/vendor/libs/sweetalert2/sweetalert2.js') }}"></script>

<script src="{{ url('/admin/assets/customjs/usersList.js') }}"></script>
@endsection