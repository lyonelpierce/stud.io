@extends('admin.layout.layout')

@section('meta')
    Catálogo - Productos
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
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Catálogo /</span> Productos</h4>

        <!-- DataTable with Buttons -->
        <div class="card">
            <div class="card-datatable table-responsive pt-0">
            <div class="head-label py-4 px-3 d-flex justify-content-between">
                <h5 class="card-title mb-0">Lista de Productos</h5>
                <!-- <button class="btn btn-secondary create-new btn-primary" data-bs-toggle="offcanvas" data-bs-target="#addProductSidebar" tabindex="0" type="button">
                    <span>
                        <i class="ti ti-plus me-sm-1"></i>
                        <span class="d-none d-sm-inline-block">Nuevo Producto</span>
                    </span>
                </button> -->
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
                    <th>Tienda</th>
                    <th>Sección</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($products as $product)
                <tr>
                    <td>{{ $product['id'] }}</td>
                    <td>
                        <div class="d-flex justify-content-start align-items-center user-name">
                            <div class="avatar-wrapper">
                                <div class="avatar me-2">
                                    @if($product['product_image'])
                                    <img src="{{ url('catalog/products/images/'.$product['product_image']) }}" alt="Avatar" class="rounded-circle">
                                    @else
                                    <img src="{{ url('admin/images/photos/default.png') }}" alt="Avatar" class="rounded-circle">
                                    @endif
                                </div>
                            </div>
                            <div class="d-flex flex-column">
                                <span class="emp_name text-truncate">{{ $product['product_name'] }}</span>
                            </div>
                    </td>
                    <td>
                        <div class="d-flex flex-column">
                            <span class="emp_name text-truncate">{{ $product['vendor']['store_name'] }}</span>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex flex-column">
                            <span class="emp_name text-truncate">{{ $product['section']['name'] }}</span>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex flex-column">
                            <span class="emp_name text-truncate">{{ $product['category']['name'] }}</span>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex flex-column">
                            <span class="emp_name text-truncate">{{ $product['product_price'] }}</span>
                        </div>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" id="statusSwitch" name="statusSwitch" class="switch-input" productId="{{ $product['id'] }}" {{ $product['status'] === 1 ? 'checked' : '' }}>
                            <span class="switch-toggle-slider">
                                <span class="switch-on"></span>
                                <span class="switch-off"></span>
                            </span>
                        </label>
                    </td>
                    <td>
                        <a href="javascript:;" class="btn-sm btn-item item-update" productId="{{ $product['id'] }}" data-bs-toggle="offcanvas" data-bs-target="#addProductSidebar">
                            <i class="ti ti-pencil"></i>
                        </a>
                        <a href="javascript:;" class="btn-sm btn-item item-delete" productId="{{ $product['id'] }}">
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
        id="addProductSidebar"
        aria-labelledby="addProductSidebarLabel">
        <div class="offcanvas-header my-1">
        <h5 class="offcanvas-title" id="addProductSidebarLabel">Editar Producto</h5>
        <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body pt-0">
        <form id="newProduct" action="{{ url('admin/products') }}" method="post" enctype="multipart/form-data">@csrf
            <div class="row">
                <div class="col mb-3">
                <label class="form-label" for="productSection">Sección</label>
                <select
                id="productSection"
                name="productSection"
                class="form-select"
                role="button"
                data-allow-clear="true">
                <option value="" disabled>Seleccionar Sección</option>
                @foreach($sections as $section)
                    <option value="{{ $section['id'] }}">{{ $section['name'] }}</option>
                @endforeach
                </select>
                </div>
            </div>
            <div class="row">
                <div class="col mb-3">
                <label class="form-label" for="productCategory">Categoría</label>
                <select
                id="productCategory"
                name="productCategory"
                class="form-select"
                role="button"
                data-allow-clear="true">
                <option value="" disabled>Seleccionar Sección</option>
                @foreach($categories as $category)
                    <option value="{{ $category['id'] }}">{{ $category['name'] }}</option>
                @endforeach
                </select>
                </div>
            </div>
            <div class="row">
                <div class="col mb-3">
                <label for="productName" class="form-label">Nombre</label>
                <input type="text" id="productName" name="productName" class="form-control" placeholder="Nombre del producto" />
                </div>
            </div>
            <div class="col mb-3">
                <label for="productDescription" class="form-label">Descripción</label>
                <textarea
                type="text"
                id="productDescription"
                name="productDescription"
                class="form-control"
                placeholder="Descripción del Producto"></textarea>
            </div>
            <div class="row">
                <div class="col mb-3">
                <label for="productPrice" class="form-label">Precio</label>
                <input type="text" id="productPrice" name="productPrice" class="form-control" placeholder="Precio del producto" />
                </div>
            </div>
            <div class="row">
                <div class="col mb-3">
                <label for="productDiscount" class="form-label">Descuento</label>
                <input type="text" id="productDiscount" name="productDiscount" class="form-control" placeholder="Descuento del producto" />
                </div>
            </div>
            <div class="row">
                <div class="col mb-3">
                <label for="productInventory" class="form-label">Inventario</label>
                <input type="number" min=0 id="productInventory" name="productInventory" class="form-control" placeholder="Inventario del producto" />
                </div>
            </div>
            <div class="row">
                <div class="col mb-3">
                <label for="metaTitle" class="form-label">Meta Title</label>
                <input type="text" id="metaTitle" name="metaTitle" class="form-control" placeholder="Meta title" />
                </div>
            </div>
            <div class="row">
                <div class="col mb-3">
                <label for="metaDescription" class="form-label">Meta Description</label>
                <input type="text" id="metaDescription" name="metaDescription" class="form-control" placeholder="Meta description" />
                </div>
            </div>
            <div class="row">
                <div class="col mb-3">
                <label for="metaKeyword" class="form-label">Meta Keyword</label>
                <input type="text" id="metaKeyword" name="metaKeyword" class="form-control" placeholder="Meta Keyword" />
                </div>
            </div>
            <div class="row">
                <label class="form-label">Destacado</label>
                <label for="isFeatured" class="switch mb-3">
                    <input type="checkbox" class="switch-input" id="isFeatured" name="isFeatured">
                    <span class="switch-toggle-slider">
                        <span class="switch-on"></span>
                        <span class="switch-off"></span>
                    </span>
                </label>
            </div>
            <div class="row">
                <div class="col mb-0">
                <label for="productImage" class="form-label">Imagen</label>
                <input type="file" id="productImage" name="productImage" class="form-control" />
                </div>
            </div>
            <img class="mt-4" id="existingImage" src="" alt="Existing Image" width="50" hidden>

            <div class="mb-3 d-flex justify-content-sm-between justify-content-start my-4">
            <div>
                <button type="submit" class="btn btn-primary btn-add-event me-sm-3 me-1">Editar</button>
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

<script src="{{ url('/admin/assets/customjs/productsList.js') }}"></script>
@endsection
