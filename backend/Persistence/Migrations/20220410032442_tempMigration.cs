using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class tempMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Producto_Proveedor_Id_ProveedorId",
                table: "Producto");

            migrationBuilder.DropIndex(
                name: "IX_Producto_Id_ProveedorId",
                table: "Producto");

            migrationBuilder.DropColumn(
                name: "Id_ProveedorId",
                table: "Producto");

            migrationBuilder.RenameColumn(
                name: "Categoria",
                table: "Producto",
                newName: "Precio");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Precio",
                table: "Producto",
                newName: "Categoria");

            migrationBuilder.AddColumn<int>(
                name: "Id_ProveedorId",
                table: "Producto",
                type: "NUMBER(10)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Producto_Id_ProveedorId",
                table: "Producto",
                column: "Id_ProveedorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Producto_Proveedor_Id_ProveedorId",
                table: "Producto",
                column: "Id_ProveedorId",
                principalTable: "Proveedor",
                principalColumn: "Id");
        }
    }
}
