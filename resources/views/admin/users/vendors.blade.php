@extends('admin.layout.layout')

@section('meta')
    Usuarios - Tatuadores
@endsection

@section('css')
<link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css') }}" />
<link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css') }}" />
<link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/libs/animate-css/animate.css') }}" />
<link rel="stylesheet" href="{{ secure_asset('/admin/assets/vendor/libs/sweetalert2/sweetalert2.css') }}" />
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
                    <th>Tienda</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($vendors as $vendor)
                <tr>
                    <td>{{ $vendor['id'] }}</td>
                    <td>
                        <div class="d-flex justify-content-start align-items-center user-name">
                            <div class="avatar-wrapper">
                                <div class="avatar me-2">
                                    @if($vendor['image'])
                                        <img src="{{ secure_asset('vendor/images/photos/'.$vendor['image']) }}" alt="Avatar" class="rounded-circle">
                                    @else
                                        <img src="{{ secure_asset('admin/images/photos/default.png') }}" alt="Avatar" class="rounded-circle">
                                    @endif
                                </div>
                            </div>
                            <div class="d-flex flex-column">
                                <span class="emp_name text-truncate">{{ $vendor['firstname'] }} {{ $vendor['lastname'] }}</span>
                                <small class="emp_post text-truncate text-muted">{{ $vendor['state'] }} -> {{ $vendor['city'] }} -> {{ $vendor['address'] }}</small>
                        </div>
                    </div>
                    </td>
                    <td>{{ $vendor['email'] }}</td>
                    <td>{{ $vendor['document'] }}</td>
                    <td>{{ $vendor['vendor_business_details']['store_name'] }}</td>
                    <td>
                        <label class="switch">
                        <input type="checkbox" class="switch-input" userId="{{ $vendor['id'] }}" {{ $vendor['status'] === 1 ? 'checked' : '' }}>
                            <span class="switch-toggle-slider">
                                <span class="switch-on"></span>
                                <span class="switch-off"></span>
                            </span>
                        </label>
                    </td>
                    <td>
                        <a href="javascript:;" class="btn-sm btn-item item-edit" data-bs-toggle="modal" data-bs-target="#user-{{ $vendor['id'] }}Info">
                            <i class="text-primary ti ti-search me-2"></i>
                        </a>
                        <a href="javascript:;" class="btn-sm btn-item item-delete" userId="{{ $vendor['id'] }}">
                            <i class="ti ti-trash text-danger"></i>
                        </a>
                    </td>
                    <!-- User Info Modal -->
                    <div class="modal fade" id="user-{{ $vendor['id'] }}Info" tabindex="-1" aria-hidden="true">
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
                                            src="{{ $vendor['image'] ? secure_asset('vendor/images/photos/'.$vendor['image']) : secure_asset('admin/images/photos/default.png') }}"
                                            alt="User Image"
                                            height="140" />
                                        </div>
                                        <h4 class="card-title fw-semibold text-center text-capitalize mb-1">{{ $vendor['firstname'] }} {{ $vendor['lastname'] }}</h4>
                                        <p class="text-center">Información Personal</p>
                                        <div class="mb-3 border-bottom"></div>
                                        <ul class="list-unstyled">
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Cedula:</span>
                                                <span>{{ $vendor['document'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Email:</span>
                                                <span>{{ $vendor['email'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Teléfono:</span>
                                                <span>09-{{ $vendor['mobile'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Provincia:</span>
                                                <span>{{ $vendor['state'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Ciudad:</span>
                                                <span>{{ $vendor['city'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Dirección:</span>
                                                <span>{{ $vendor['address'] }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>

                                <!-- store Info -->
                                <div class="col-xl mb-md-0 mb-4">
                                    <div class="card border rounded shadow-none">
                                    <div class="card-body">
                                        <div class="my-3 pt-2 text-center">
                                        <img
                                            class="rounded-circle"
                                            src="{{ $vendor['vendor_business_details']['store_logo'] ? secure_asset('vendor/images/logos/'.$vendor['vendor_business_details']['stduio_logo']) : secure_asset('admin/images/photos/default.png') }}"
                                            alt="User Image"
                                            height="140" />
                                        </div>
                                        <h4 class="card-title fw-semibold text-center text-capitalize mb-1">{{ $vendor['vendor_business_details']['store_name'] }}</h4>
                                        <p class="text-center">Información de la Tienda</p>
                                        <div class="mb-3 border-bottom"></div>
                                        <ul class="list-unstyled">
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">RUC:</span>
                                                <span>{{ $vendor['vendor_business_details']['store_ruc'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Provincia:</span>
                                                <span>{{ $vendor['vendor_business_details']['store_state'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Ciudad:</span>
                                                <span>{{ $vendor['vendor_business_details']['store_city']  }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Dirección:</span>
                                                <span>{{ $vendor['vendor_business_details']['store_address'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Teléfono:</span>
                                                <span>09-{{ $vendor['vendor_business_details']['store_mobile'] }}</span>
                                            </li>
                                            @if($vendor['vendor_business_details']['store_website'])
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Website:</span>
                                                <span>{{ $vendor['vendor_business_details']['store_website'] }}</span>
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
                                        <h4 class="card-title fw-semibold text-center text-capitalize mb-1">{{ $vendor['vendor_bank_details']['bank_name'] }}</h4>
                                        <p class="text-center">Información Bancaria</p>
                                        <div class="mb-3 border-bottom"></div>
                                        <ul class="list-unstyled">
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Beneficiario:</span>
                                                <span>{{ $vendor['vendor_bank_details']['bank_account_name'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Tipo de Cuenta:</span>
                                                <span>{{ $vendor['vendor_bank_details']['bank_account_type'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Número de Cuenta:</span>
                                                <span>{{ $vendor['vendor_bank_details']['bank_account_number'] }}</span>
                                            </li>
                                            <li class="mb-2 pt-1">
                                                <span class="fw-semibold me-1">Número de Cedula</span>
                                                <span>{{ $vendor['vendor_bank_details']['bank_account_document']  }}</span>
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
<script src="{{ secure_asset('/admin/assets/customjs/settingsAccount.js') }}"></script>
<script src="{{ secure_asset('/admin/assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js') }}"></script>
<script src="{{ secure_asset('/admin/assets/vendor/libs/sweetalert2/sweetalert2.js') }}"></script>

<script src="{{ secure_asset('/admin/assets/customjs/vendorsList.js') }}"></script>
@endsection
