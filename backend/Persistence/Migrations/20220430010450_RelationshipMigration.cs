using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class RelationshipMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Producto",
                table: "Producto");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Producto");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Proveedor",
                newName: "Id_Proveedor");

            migrationBuilder.RenameColumn(
                name: "Nombre",
                table: "Producto",
                newName: "Nombre_Producto");

            migrationBuilder.AddColumn<int>(
                name: "Sku_Id",
                table: "Producto",
                type: "NUMBER(10)",
                nullable: false,
                defaultValue: 0)
                .Annotation("Oracle:Identity", "START WITH 1 INCREMENT BY 1");

            migrationBuilder.AddColumn<string>(
                name: "Activo",
                table: "Producto",
                type: "NVARCHAR2(1)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Descripcion",
                table: "Producto",
                type: "NVARCHAR2(2000)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Producto",
                table: "Producto",
                column: "Sku_Id");

            migrationBuilder.CreateTable(
                name: "ProductoProveedor",
                columns: table => new
                {
                    ProductoSku_Id = table.Column<int>(type: "NUMBER(10)", nullable: false),
                    ProveedorId_Proveedor = table.Column<int>(type: "NUMBER(10)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductoProveedor", x => new { x.ProductoSku_Id, x.ProveedorId_Proveedor });
                    table.ForeignKey(
                        name: "FK_ProductoProveedor_Producto_ProductoSku_Id",
                        column: x => x.ProductoSku_Id,
                        principalTable: "Producto",
                        principalColumn: "Sku_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductoProveedor_Proveedor_ProveedorId_Proveedor",
                        column: x => x.ProveedorId_Proveedor,
                        principalTable: "Proveedor",
                        principalColumn: "Id_Proveedor",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductoProveedor_ProveedorId_Proveedor",
                table: "ProductoProveedor",
                column: "ProveedorId_Proveedor");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductoProveedor");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Producto",
                table: "Producto");

            migrationBuilder.DropColumn(
                name: "Sku_Id",
                table: "Producto");

            migrationBuilder.DropColumn(
                name: "Activo",
                table: "Producto");

            migrationBuilder.DropColumn(
                name: "Descripcion",
                table: "Producto");

            migrationBuilder.RenameColumn(
                name: "Id_Proveedor",
                table: "Proveedor",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "Nombre_Producto",
                table: "Producto",
                newName: "Nombre");

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "Producto",
                type: "RAW(16)",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Producto",
                table: "Producto",
                column: "Id");
        }
    }
}
