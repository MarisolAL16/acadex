import { layout } from "../layout.js";

function obtenerBadgeEstado(estado) {
	if (estado === "pendiente") return "bg-danger";
	if (estado === "en progreso") return "bg-warning text-dark";
	if (estado === "completada") return "bg-success";
	return "bg-secondary";
}

function obtenerBadgePrioridad(prioridad) {
	if (prioridad === "alta") return "bg-danger";
	if (prioridad === "media") return "bg-warning text-dark";
	if (prioridad === "baja") return "bg-success";
	return "bg-secondary";
}

function obtenerClaseFilaEstado(estado) {
	if (estado === "pendiente") return "table-danger";
	if (estado === "en progreso") return "table-warning";
	if (estado === "completada") return "table-success";
	return "";
}

export function tareasPage(tareas, mensaje) {
	let contenido = `
		<div class="d-flex justify-content-between align-items-center mb-4">
			<h1>Lista de tareas</h1>
			<a href="/tareas/nueva" class="btn btn-primary"><i class="bi bi-plus-circle"></i> Nueva tarea</a>
		</div>
	`;

	// Mostrar alerta según el mensaje
	if (mensaje === "creada") {
		contenido += `
			<div class="alert alert-success alert-dismissible fade show" role="alert">
				Tarea creada correctamente.
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
		`;
	} else if (mensaje === "actualizada") {
		contenido += `
			<div class="alert alert-info alert-dismissible fade show" role="alert">
				Tarea actualizada correctamente.
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
		`;
	} else if (mensaje === "eliminada") {
		contenido += `
			<div class="alert alert-warning alert-dismissible fade show" role="alert">
				Tarea eliminada correctamente.
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
		`;
	}

	contenido += `
		<div class="card mb-4 shadow-sm">
			<div class="card-body">
				<form method="GET" action="/tareas" class="row g-3 align-items-end">
					<div class="col-md-8">
						<label class="form-label">Filtrar por estado</label>
						<select name="estado" class="form-select">
							<option value="">Todas</option>
							<option value="pendiente">Pendiente</option>
							<option value="en progreso">En progreso</option>
							<option value="completada">Completada</option>
						</select>
					</div>
					<div class="col-md-4">
						<button type="submit" class="btn btn-outline-primary w-100">
							Filtrar
						</button>
					</div>
				</form>
			</div>
		</div>
	`;

	if (tareas.length === 0) {
		contenido += `
			<div class="alert alert-info">
				No hay tareas registradas.
			</div>
		`;
	} else {
		contenido += `
			<div class="table-responsive">
				<table class="table table-striped table-hover shadow-sm">
					<thead class="table-primary">
						<tr>
							<th>Título</th>
							<th>Descripción</th>
							<th>Estado</th>
							<th>Prioridad</th>
							<th class="text-center">Acciones</th>
						</tr>
					</thead>
					<tbody>
		`;

		tareas.forEach(tarea => {
			contenido += `
				<tr>
					<td class="fw-bold">${tarea.titulo}</td>
					<td>${tarea.descripcion}</td>
					<td>
						<span class="badge ${obtenerBadgeEstado(tarea.estado)}">
							${tarea.estado}
						</span>
					</td>
					<td>
						<span class="badge ${obtenerBadgePrioridad(tarea.prioridad)}">
							Prioridad ${tarea.prioridad}
						</span>
					</td>
					<td class="text-center">
						<a href="/tareas/${tarea.id}" class="btn btn-sm btn-outline-primary" title="Ver detalle">
							<i class="bi bi-eye"></i>
						</a>
						<a href="/tareas/${tarea.id}/editar" class="btn btn-sm btn-outline-warning" title="Editar">
							<i class="bi bi-pencil-square"></i>
						</a>
						<form action="/tareas/${tarea.id}/eliminar" method="POST" class="d-inline">
							<button type="submit" class="btn btn-sm btn-outline-danger" title="Eliminar" onclick="return confirm('¿Está seguro de eliminar esta tarea?')">
								<i class="bi bi-trash"></i>
							</button>
						</form>
					</td>
				</tr>
			`;
		});

		contenido += `
					</tbody>
				</table>
			</div>
		`;
	}

	return layout("Tareas", contenido);
}