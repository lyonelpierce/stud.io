@extends('admin.layout.layout')

@section('meta')
    Categorias
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
        <h4 class="fw-bold py-3 mb-4">Categorias</h4>

        <!-- DataTable with Buttons -->
        <div class="card">
            <div class="card-datatable table-responsive pt-0">
            <div class="head-label pt-4 ps-3 pb-3">
                <h5 class="card-title mb-0">Lista de Categorias</h5>
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
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($categories as $category)
                <tr>
                    <td>{{ $category['id'] }}</td>
                    <td>{{ $category['name'] }}</td>
                    <td>
                        <label class="switch">
                        <input type="checkbox" class="switch-input" userId="{{ $category['id'] }}" {{ $category['status'] === 1 ? 'checked' : '' }}>
                            <span class="switch-toggle-slider">
                                <span class="switch-on"></span>
                                <span class="switch-off"></span>
                            </span>
                        </label>
                    </td>
                    <td>
                        <a href="javascript:;" class="btn-sm btn-item item-delete" userId="{{ $category['id'] }}">
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
<script src="{{ url('/admin/assets/vendor/libs/sweetalert2/sweetalert2.js') }}"></script>

<script src="{{ url('/admin/assets/js/tables-datatables-basic.js') }}"></script>
@endsection