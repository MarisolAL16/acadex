import { layout } from "../layout.js";

export function nuevaTareaPage(errores = null, valores = null) {
	const getClase = (campo) => errores && errores[campo] ? "form-control is-invalid" : "form-control";
	const getMensajeError = (campo) => errores && errores[campo] ? `<div class="invalid-feedback d-block">${errores[campo]}</div>` : "";
	const getValor = (campo) => valores && valores[campo] ? valores[campo] : "";

	return layout(
		"Nueva tarea",
		`
			<div class="card shadow-sm">
				<div class="card-header bg-primary text-white">
					Registrar nueva tarea
				</div>
				<div class="card-body">
					<div class="container">
						<form action="/tareas" method="POST">
							<div class="row g-3">
								<div class="col-md-6">
									<label class="form-label">Título</label>
									<input type="text" name="titulo" class="${getClase("titulo")}" value="${getValor("titulo")}">
									${getMensajeError("titulo")}
								</div>

								<div class="col-md-6">
									<label class="form-label">Estado</label>
									<select name="estado" class="form-select">
										<option value="pendiente" ${getValor("estado") === "pendiente" ? "selected" : ""}>Pendiente</option>
										<option value="en progreso" ${getValor("estado") === "en progreso" ? "selected" : ""}>En progreso</option>
										<option value="completada" ${getValor("estado") === "completada" ? "selected" : ""}>Completada</option>
									</select>
								</div>

								<div class="col-12">
									<label class="form-label">Descripción</label>
									<textarea name="descripcion" class="${getClase("descripcion")}" rows="4">${getValor("descripcion")}</textarea>
									${getMensajeError("descripcion")}
								</div>

								<div class="col-md-6">
									<label class="form-label">Prioridad</label>
									<select name="prioridad" class="form-select">
										<option value="baja" ${getValor("prioridad") === "baja" ? "selected" : ""}>Baja</option>
										<option value="media" ${getValor("prioridad") === "media" ? "selected" : ""}>Media</option>
										<option value="alta" ${getValor("prioridad") === "alta" ? "selected" : ""}>Alta</option>
									</select>
								</div>

								<div class="col-12 d-flex gap-2">
									<button type="submit" class="btn btn-primary"><i class="bi bi-check-circle"></i> Guardar</button>
									<a href="/tareas" class="btn btn-secondary"><i class="bi bi-x-circle"></i> Cancelar</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		`
	);
}
