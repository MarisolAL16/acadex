import { layout } from "../layout.js";

export function resumenPage(stats) {
  return layout(
    "Resumen de tareas",
    `
      <div class="row g-4">
        <div class="col-12">
          <div class="card shadow-sm">
            <div class="card-body">
              <h1 class="h3 mb-3">Resumen general de tareas</h1>
              <p class="text-muted">Estadísticas de estado de las tareas en la aplicación.</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-6">
          <div class="card text-white bg-primary shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title">Total de tareas</h5>
              <p class="display-6 mb-0">${stats.total}</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-6">
          <div class="card text-white bg-danger shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title">Pendientes</h5>
              <p class="display-6 mb-0">${stats.pendientes}</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-6">
          <div class="card text-white bg-warning shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title">En progreso</h5>
              <p class="display-6 mb-0">${stats.enProgreso}</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-6">
          <div class="card text-white bg-success shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title">Completadas</h5>
              <p class="display-6 mb-0">${stats.completadas}</p>
            </div>
          </div>
        </div>
      </div>
    `
  );
}
