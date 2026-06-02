import { layout } from "../layout.js";

export function nuevaTareaPage() {
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
<input type="text" name="titulo" class="form-control">
</div>

<div class="col-md-6">
<label class="form-label">Estado</label>
<select name="estado" class="form-select">
<option value="pendiente">Pendiente</option>
<option value="en progreso">En progreso</option>
<option value="completada">Completada</option>
</select>
</div>

<div class="col-12">
<label class="form-label">Descripción</label>
<textarea name="descripcion" class="form-control" rows="4"></textarea>
</div>

<div class="col-md-6">
<label class="form-label">Prioridad</label>
<select name="prioridad" class="form-select">
<option value="baja">Baja</option>
<option value="media">Media</option>
<option value="alta">Alta</option>
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
