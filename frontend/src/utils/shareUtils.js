// Share utility functions for products

export const shareProduct = async (product, method = 'native') => {
  const shareData = {
    title: `${product.name} - Promac Electrical`,
    text: `Check out this amazing ${product.name} from Promac Electrical! ${product.description}`,
    url: `${window.location.origin}/product-catalog?product=${product.id}`,
  };

  try {
    switch (method) {
      case 'native':
        if (navigator.share && navigator.canShare(shareData)) {
          await navigator.share(shareData);
          return { success: true, message: 'Shared successfully!' };
        } else {
          // Fallback to clipboard
          return await copyToClipboard(shareData.url);
        }
      
      case 'whatsapp':
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
          `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`
        )}`;
        window.open(whatsappUrl, '_blank');
        return { success: true, message: 'Opening WhatsApp...' };
      
      case 'telegram':
        const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(
          `${shareData.title}\n\n${shareData.text}`
        )}`;
        window.open(telegramUrl, '_blank');
        return { success: true, message: 'Opening Telegram...' };
      
      case 'email':
        const emailUrl = `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(
          `${shareData.text}\n\n${shareData.url}`
        )}`;
        window.open(emailUrl);
        return { success: true, message: 'Opening email client...' };
      
      case 'facebook':
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`;
        window.open(facebookUrl, '_blank');
        return { success: true, message: 'Opening Facebook...' };
      
      case 'twitter':
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `${shareData.title}\n\n${shareData.text}`
        )}&url=${encodeURIComponent(shareData.url)}`;
        window.open(twitterUrl, '_blank');
        return { success: true, message: 'Opening Twitter...' };
      
      case 'linkedin':
        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`;
        window.open(linkedinUrl, '_blank');
        return { success: true, message: 'Opening LinkedIn...' };
      
      default:
        return await copyToClipboard(shareData.url);
    }
  } catch (error) {
    console.error('Share error:', error);
    return { success: false, message: 'Failed to share. Please try again.' };
  }
};

export const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return { success: true, message: 'Link copied to clipboard!' };
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        textArea.remove();
        return { success: true, message: 'Link copied to clipboard!' };
      } catch (err) {
        textArea.remove();
        return { success: false, message: 'Failed to copy to clipboard.' };
      }
    }
  } catch (error) {
    console.error('Copy to clipboard error:', error);
    return { success: false, message: 'Failed to copy to clipboard.' };
  }
};

export const generateProductShareUrl = (product) => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/product-catalog?product=${product.id}&name=${encodeURIComponent(product.name)}`;
};

export const getShareMethods = () => {
  const methods = [
    { id: 'native', name: 'Share', icon: 'Share' },
    { id: 'whatsapp', name: 'WhatsApp', icon: 'MessageCircle' },
    { id: 'telegram', name: 'Telegram', icon: 'Send' },
    { id: 'email', name: 'Email', icon: 'Mail' },
    { id: 'facebook', name: 'Facebook', icon: 'Facebook' },
    { id: 'twitter', name: 'Twitter', icon: 'Twitter' },
    { id: 'linkedin', name: 'LinkedIn', icon: 'Linkedin' },
    { id: 'copy', name: 'Copy Link', icon: 'Copy' }
  ];

  // Filter out native share if not supported
  if (!navigator.share) {
    return methods.filter(method => method.id !== 'native');
  }

  return methods;
}; 