import { layout } from "../layout.js";

export function editarTareaPage(tarea) {
  return layout(
    "Editar tarea",
    `
    <div class="card shadow-sm">
      <div class="card-header bg-warning">
        Editar tarea
      </div>
      <div class="card-body">
        <div class="container">
          <form action="/tareas/${tarea.id}/editar" method="POST">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Título</label>
                <input
                  type="text"
                  name="titulo"
                  class="form-control"
                  value="${tarea.titulo}"
                >
              </div>

              <div class="col-md-6">
                <label class="form-label">Estado</label>
                <select name="estado" class="form-select">
                  <option value="pendiente" ${tarea.estado === "pendiente" ? "selected" : ""}>
                    Pendiente
                  </option>
                  <option value="en progreso" ${tarea.estado === "en progreso" ? "selected" : ""}>
                    En progreso
                  </option>
                  <option value="completada" ${tarea.estado === "completada" ? "selected" : ""}>
                    Completada
                  </option>
                </select>
              </div>

              <div class="col-12">
                <label class="form-label">Descripción</label>
                <textarea
                  name="descripcion"
                  class="form-control"
                  rows="4"
                >${tarea.descripcion}</textarea>
              </div>

              <div class="col-md-6">
                <label class="form-label">Prioridad</label>
                <select name="prioridad" class="form-select">
                  <option value="baja" ${tarea.prioridad === "baja" ? "selected" : ""}>
                    Baja
                  </option>
                  <option value="media" ${tarea.prioridad === "media" ? "selected" : ""}>
                    Media
                  </option>
                  <option value="alta" ${tarea.prioridad === "alta" ? "selected" : ""}>
                    Alta
                  </option>
                </select>
              </div>

              <div class="col-12 d-flex gap-2">
                <button type="submit" class="btn btn-warning"><i class="bi bi-pencil-square"></i> Actualizar</button>
                <a href="/tareas" class="btn btn-secondary"><i class="bi bi-arrow-left"></i> Cancelar</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    `
  );
}