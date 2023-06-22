@extends('admin.layout.layout')

@section('meta')
    Usuarios - Tatuadores
@endsection

@section('css')
<link rel="stylesheet" href="{{ url('/admin/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css') }}" />
<link rel="stylesheet" href="{{ url('/admin/assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css') }}" />
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
                        <a href="javascript:;" class="btn-sm btn-item item-edit">
                            <i class="text-primary ti ti-search me-2"></i>
                        </a>
                        <a href="javascript:;" class="btn-sm btn-item item-edit">
                            <i class="ti ti-trash text-danger"></i>
                        </a>
                    </td>
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

<script src="{{ url('/admin/assets/js/tables-datatables-basic.js') }}"></script>
@endsection