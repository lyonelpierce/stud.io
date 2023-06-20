@extends('admin.layout.layout')

@section('meta')
    Ajustes - Cuenta
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
                        @if($tattooer['status'] == 1)
                            <span class="badge bg-label-success me-1">Activo</span>   
                        @else
                            <span class="badge bg-label-secondary me-1">Inactivo</span>
                        @endif 
                    </td>
                    <td>
                        <a href="javascript:;" class="btn-sm btn-item item-edit">
                            <i class="text-primary ti ti-user-check me-2"></i>
                        </a>
                        <a href="javascript:;" class="btn-sm btn-item item-edit">
                            <i class="text-primary ti ti-search me-2"></i>
                        </a>
                        <a href="javascript:;" class="btn-sm btn-item item-edit">
                            <i class="ti ti-trash text-danger"></i>
                        </a>
                    </td>
                @endforeach
            </tbody>
            </table>
        </div>
        </div>
        <!-- Modal to add new record -->
        <div class="offcanvas offcanvas-end" id="add-new-record">
        <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title" id="exampleModalLabel">New Record</h5>
            <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body flex-grow-1">
            <form class="add-new-record pt-0 row g-2" id="form-add-new-record" onsubmit="return false">
            <div class="col-sm-12">
                <label class="form-label" for="basicFullname">Full Name</label>
                <div class="input-group input-group-merge">
                <span id="basicFullname2" class="input-group-text"><i class="ti ti-user"></i></span>
                <input
                    type="text"
                    id="basicFullname"
                    class="form-control dt-full-name"
                    name="basicFullname"
                    placeholder="John Doe"
                    aria-label="John Doe"
                    aria-describedby="basicFullname2" />
                </div>
            </div>
            <div class="col-sm-12">
                <label class="form-label" for="basicPost">Post</label>
                <div class="input-group input-group-merge">
                <span id="basicPost2" class="input-group-text"><i class="ti ti-briefcase"></i></span>
                <input
                    type="text"
                    id="basicPost"
                    name="basicPost"
                    class="form-control dt-post"
                    placeholder="Web Developer"
                    aria-label="Web Developer"
                    aria-describedby="basicPost2" />
                </div>
            </div>
            <div class="col-sm-12">
                <label class="form-label" for="basicEmail">Email</label>
                <div class="input-group input-group-merge">
                <span class="input-group-text"><i class="ti ti-mail"></i></span>
                <input
                    type="text"
                    id="basicEmail"
                    name="basicEmail"
                    class="form-control dt-email"
                    placeholder="john.doe@example.com"
                    aria-label="john.doe@example.com" />
                </div>
                <div class="form-text">You can use letters, numbers & periods</div>
            </div>
            <div class="col-sm-12">
                <label class="form-label" for="basicDate">Joining Date</label>
                <div class="input-group input-group-merge">
                <span id="basicDate2" class="input-group-text"><i class="ti ti-calendar"></i></span>
                <input
                    type="text"
                    class="form-control dt-date"
                    id="basicDate"
                    name="basicDate"
                    aria-describedby="basicDate2"
                    placeholder="MM/DD/YYYY"
                    aria-label="MM/DD/YYYY" />
                </div>
            </div>
            <div class="col-sm-12">
                <label class="form-label" for="basicSalary">Salary</label>
                <div class="input-group input-group-merge">
                <span id="basicSalary2" class="input-group-text"><i class="ti ti-currency-dollar"></i></span>
                <input
                    type="number"
                    id="basicSalary"
                    name="basicSalary"
                    class="form-control dt-salary"
                    placeholder="12000"
                    aria-label="12000"
                    aria-describedby="basicSalary2" />
                </div>
            </div>
            <div class="col-sm-12">
                <button type="submit" class="btn btn-primary data-submit me-sm-3 me-1">Submit</button>
                <button type="reset" class="btn btn-outline-secondary" data-bs-dismiss="offcanvas">Cancel</button>
            </div>
            </form>
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