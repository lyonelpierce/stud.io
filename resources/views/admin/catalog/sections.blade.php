@extends('admin.layout.layout')

@section('meta')
    Catálogo - Secciones
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
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Catálogo /</span> Secciones</h4>

        <!-- DataTable with Buttons -->
        <div class="card">
            <div class="card-datatable table-responsive pt-0">
            <div class="head-label py-4 px-3 d-flex justify-content-between">
                <h5 class="card-title mb-0">Lista de Secciones</h5>
                <button class="btn btn-secondary create-new btn-primary item-add" data-bs-toggle="offcanvas" data-bs-target="#addSectionSidebar" tabindex="0" type="button">
                    <span>
                        <i class="ti ti-plus me-sm-1"></i>
                        <span class="d-none d-sm-inline-block">Nueva Sección</span>
                    </span>
                </button>
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
                @foreach ($sections as $section)
                <tr>
                    <td>{{ $section['id'] }}</td>
                    <td>
                        <div class="d-flex justify-content-start align-items-center user-name">
                            <div class="avatar-wrapper">
                                <div class="avatar me-2">
                                    @if($section['image'])
                                    <img src="{{ url('catalog/sections/images/'.$section['image']) }}" alt="Avatar" class="rounded-circle">
                                    @else
                                    <img src="{{ url('admin/images/photos/default.png') }}" alt="Avatar" class="rounded-circle">
                                    @endif
                                </div>
                            </div>
                            <div class="d-flex flex-column">
                                <span class="emp_name text-truncate">{{ $section['name'] }}</span>
                                <small class="emp_post text-truncate text-muted">{{ $section['description'] }}</small>
                            </div>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" class="switch-input" sectionId="{{ $section['id'] }}" {{ $section['status'] === 1 ? 'checked' : '' }}>
                            <span class="switch-toggle-slider">
                                <span class="switch-on"></span>
                                <span class="switch-off"></span>
                            </span>
                        </label>
                    </td>
                    <td>
                        <a href="javascript:;" class="btn-sm btn-item item-update" sectionId="{{ $section['id'] }}" data-bs-toggle="offcanvas" data-bs-target="#addSectionSidebar">
                            <i class="ti ti-pencil"></i>
                        </a>
                        <a href="javascript:;" class="btn-sm btn-item item-delete" sectionId="{{ $section['id'] }}">
                            <i class="ti ti-trash text-danger"></i>
                        </a>
                    </td>
                @endforeach
                </tr>
            </tbody>
            </table>
        </div>
        </div>

        <!-- Modal -->

        <div
        class="offcanvas offcanvas-end event-sidebar"
        tabindex="-1"
        id="addSectionSidebar"
        aria-labelledby="addSectionSidebarLabel">
        <div class="offcanvas-header my-1">
        <h5 class="offcanvas-title" id="addSectionSidebarLabel"></h5>
        <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body pt-0">
        <form id="newsection" action="{{ url('admin/sections') }}" method="post" enctype="multipart/form-data">@csrf
            <div class="row">
                <div class="col mb-3">
                <label for="sectionName" class="form-label">Nombre</label>
                <input type="text" id="sectionName" name="sectionName" class="form-control" placeholder="Nombre de la sección" />
                </div>
            </div>
            <div class="row">
                <div class="col mb-3">
                <label for="sectionDescription" class="form-label">Descripción</label>
                <input
                    type="text"
                    id="sectionDescription"
                    name="sectionDescription"
                    class="form-control"
                    placeholder="Descripción de la sección" />
                </div>
            <div class="row">
                <div class="col mb-0">
                <label for="sectionImage" class="form-label">Imagen</label>
                <input type="file" id="sectionImage" name="sectionImage" class="form-control" />
                </div>
            </div>
            <div class="mb-3 d-flex justify-content-sm-between justify-content-start my-4">
            <div>
                <button type="submit" class="btn btn-primary btn-add-event me-sm-3 me-1" id="sectionButton"></button>
                <button
                type="reset"
                class="btn btn-label-secondary btn-cancel me-sm-0 me-1"
                data-bs-dismiss="offcanvas">
                Cancelar
                </button>
            </div>
            <div><button class="btn btn-label-danger btn-delete-event d-none">Delete</button></div>
            </div>
        </form>
        </div>
    </div>

    </div>
    <!-- / Content -->

    <div class="content-backdrop fade"></div>
</div>

@endsection

@section('js')
<script src="{{ url('/admin/assets/customjs/settingsAccount.js') }}"></script>
<script src="{{ url('/admin/assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js') }}"></script>
<script src="{{ url('/admin/assets/vendor/libs/sweetalert2/sweetalert2.js') }}"></script>

<script src="{{ url('/admin/assets/customjs/sectionsList.js') }}"></script>
@endsection
