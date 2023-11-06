document.addEventListener('DOMContentLoaded', function() {
  var boutonsAjouterPanier = document.getElementsByClassName('ajouter-panier');
  var listeProduits = document.getElementById('liste-produits');
  var total = document.getElementById('total');
  var boutonPaiement = document.getElementById('bouton-paiement');
  
  var panier = [];
  
  for (var i = 0; i < boutonsAjouterPanier.length; i++) {
    boutonsAjouterPanier[i].addEventListener('click', function() {
      var produitId = this.getAttribute('data-produit-id');
      var prix = parseFloat(this.getAttribute('data-prix'));
      
      var produit = {
        id: produitId,
        prix: prix
      };
      
      panier.push(produit);
      afficherProduits();
      calculerTotal();
    });
  }
  
  function afficherProduits() {
    listeProduits.innerHTML = '';
    
    for (var i = 0; i < panier.length; i++) {
      var produit = panier[i];
      
      var elementProduit = document.createElement('div');
      elementProduit.textContent = 'Produit ' + produit.id + ' - Prix: $' + produit.prix.toFixed(2);
      
      listeProduits.appendChild(elementProduit);
    }
  }
  
  function calculerTotal() {
    var totalPrix = 0;
    
    for (var i = 0; i < panier.length; i++) {
      totalPrix += panier[i].prix;
    }
    
    total.textContent = totalPrix.toFixed(2);
  }
  
  boutonPaiement.addEventListener('click', function() {
    if (panier.length > 0) {
      // Effectuer le traitement de paiement ici
      
      // Réinitialiser le panier
      panier = [];
      afficherProduits();
      calculerTotal();
      
      alert('Paiement effectué avec succès !');
    } else {
      alert('Le panier est vide. Ajoutez des produits avant de procéder au paiement.');
    }
  });
});
