# 🍔 Fullstackweek Donalds

Projeto desenvolvido durante a **Fullstack Week**, recriando um sistema completo de restaurante (tipo McDonald's).  
Aplicação feita em **Next.js 15**, **Prisma**, **PostgreSQL** e **Tailwind + shadcn/ui**.

---

## 🚀 Linha do Tempo do Desenvolvimento

### 📅 25/08/2025
- Inicialização do projeto com `npx create-next-app`.
- Configuração inicial do **Git** e criação do repositório.

### 📅 26/08/2025
- Configuração do **Prisma** e integração com banco de dados.
- Criação dos primeiros modelos no `schema.prisma`:
  - `Restaurant`
  - `MenuCategory`
  - `Product`
- Execução das primeiras **migrações**.

### 📅 27/08/2025
- Criação da página inicial de cada restaurante (`/[slug]`).
- Tela de boas-vindas com opções de consumo:
  - 🍽️ **DINE_IN** (para comer no local).
  - 🥡 **TAKEAWAY** (para levar).
- Ajuste de layout com **Tailwind CSS** e **shadcn/ui**.

### 📅 28/08/2025
- Implementação do **menu do restaurante**:
  - Componente `RestaurantCategories` com scroll horizontal.
  - Estado dinâmico para selecionar categorias.
- Criação do componente `Products` para renderizar os produtos de cada categoria.
- Ajustes e debug para exibição dos **produtos carregados do banco**.

---

## 🛠️ Tecnologias Utilizadas
- [Next.js 15](https://nextjs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 📌 Próximos Passos
- [ ] Resolver bug na renderização dos produtos.
- [ ] Criar carrinho de compras.
- [ ] Adicionar autenticação para clientes.
- [ ] Implementar integração com pagamento.
- [ ] Deploy da aplicação.

---

## 👨‍💻 Autor
Desenvolvido por **Juliano Balbino** durante a **Fullstack Week**.


