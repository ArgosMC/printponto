# Configuração do EmailJS para o Site PrintPonto

Para que o formulário de contato funcione e envie emails diretamente para **amcmogi@gmail.com**, você precisa configurar o EmailJS. Siga os passos abaixo:

## 1. Criar conta no EmailJS
1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

## 2. Configurar o serviço de email
1. No painel do EmailJS, vá em "Email Services"
2. Clique em "Add New Service"
3. Escolha "Gmail" (recomendado)
4. Conecte sua conta Gmail (amcmogi@gmail.com)
5. Anote o **Service ID** que será gerado

## 3. Criar template de email
1. Vá em "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com:
   - **To Email**: {{to_email}}
   - **From Name**: {{from_name}}
   - **From Email**: {{from_email}}
   - **Subject**: Nova mensagem do site PrintPonto
   - **Content**: 
     \`\`\`
     Nome: {{from_name}}
     Email: {{from_email}}
     Telefone: {{phone}}
     
     Mensagem:
     {{message}}
     \`\`\`
4. Anote o **Template ID** que será gerado

## 4. Obter chave pública
1. Vá em "Account" > "General"
2. Copie sua **Public Key**

## 5. Atualizar o código
No arquivo `script.js`, substitua:
- `YOUR_PUBLIC_KEY` pela sua Public Key
- `YOUR_SERVICE_ID` pelo Service ID do Gmail
- `YOUR_TEMPLATE_ID` pelo Template ID criado

## Exemplo de configuração final:
\`\`\`javascript
emailjs.init("user_xxxxxxxxxxxxxxxxx"); // Sua Public Key
emailjs.send('service_xxxxxxxx', 'template_xxxxxxxx', templateParams) // Seus IDs
\`\`\`

## Teste
Após configurar, teste o formulário enviando uma mensagem. Você deve receber o email em amcmogi@gmail.com.

**Importante**: O EmailJS tem limite de 200 emails gratuitos por mês. Para mais emails, considere um plano pago.
